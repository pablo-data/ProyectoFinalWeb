import { Router } from '@angular/router';
import { LoginService } from './../../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.scss'],
})
export class RecuperarPassComponent implements OnInit {
  public formRecuperar: FormGroup = new FormGroup({});
  private idUsuario:number=-1;
  public mensaje:string='';
  constructor( private formBuilder: FormBuilder, private login:LoginService,private router:Router) {}

  ngOnInit(): void {
    this.formRecuperar = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      secretQ:['',Validators.required],
      secretA:['',Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  
  }
  checkPass(){
    if(this.formRecuperar.get("password").value==this.formRecuperar.get("password2").value){
      return true;
    }
    return false;
  }
  send(){
    let esAdmin;
    (sessionStorage.getItem('recuperarAdmin')=='false')?esAdmin=false:esAdmin=true;
      this.login.token().subscribe((data) => {
        if (data.message != '') {
          this.login
            .getUserByMail(this.formRecuperar.get('email').value, data.message,esAdmin)
            .subscribe((data) => {
              if (data.message != '') {
                this.idUsuario = data.message[0].idUsuario;
                if (this.checkPass()) {
                  let contraseña = this.formRecuperar.get('password').value;
                  let pregunta = this.formRecuperar.get('secretQ').value;
                  let respuesta = this.formRecuperar.get('secretA').value;
                  this.login.token().subscribe((data) => {
                    if (data.message.info != '') {
                      this.login
                        .patchNewPass(
                          this.idUsuario,
                          { contraseña, pregunta, respuesta },
                          data.message,esAdmin
                        )
                        .subscribe((data) => {
                          if (
                            data.message.info ==
                            'Rows matched: 1  Changed: 1  Warnings: 0'
                          ) {
                            sessionStorage.removeItem('recuperarAdmin');
                            this.router.navigate(['']);
                          } else {
                            this.mensaje = 'Respuesta errónea';
                          }
                        });
                    }
                  });
                } else {
                  this.mensaje = 'Las contraseñas no coinciden';
                }
              }
            });
        }
      });
  }
}