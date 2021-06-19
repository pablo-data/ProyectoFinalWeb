import { LoginService } from './../../servicios/login.service';
import { miUsuario } from '../../interfaces/Usuario';
import { HeaderLoginService } from '../../servicios/header-login.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss'],
})
export class IniciarSesionUsuarioComponent implements OnInit {
  @Input() data: any;
  public formLogin: FormGroup = new FormGroup({});
  public siteKey: string = '';
  public llenadoCompleto: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private headerLog: HeaderLoginService,
    private login: LoginService,
  ) {
    this.siteKey = '6LdZ8CgbAAAAACt5zy_JxiKcrrDJKjSeKfw-9Wf6';
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }
  send() {
     
    this.login.token().subscribe(token => {
      this.login.validarLogin(this.formLogin.get('email').value,this.formLogin.get('password').value,token.message)
        .subscribe(data => {
          console.log(data);
          if (data.lenght == 0) {
            //mensaje de error
            console.log('Login no existe');
          } else {
            
            this.data = data;
            this.login.usuario = data;
            this.headerLog.headerTrigger.emit(this.data);
            this.router.navigate(['/usuarioHome']);
          }
        });
    });
  }
  recordar() {
    //
  }
}
