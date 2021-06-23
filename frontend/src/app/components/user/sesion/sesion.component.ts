import { LoginService } from '../../../servicios/login.service';
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
  public mensaje:string='';
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
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
  recuperarPass(){
    sessionStorage.setItem('recuperarAdmin','false');
    this.router.navigate(['/recuperacion']);
  }
  send() {
    this.login.token().subscribe(token => {
      this.login.validarLoginUser(
          this.formLogin.get('email').value,
          this.formLogin.get('password').value,
          token.message
        ).subscribe((data) => {
          if (data.message=='') {
            console.log('Login no existe');
            this.mensaje="Usuario no encontrado";
          } else {
            this.data = data;
            this.mensaje = '';
            this.login.setLogueoStatus('false', data.message[0].idUsuario);
            this.router.navigate(['/usuarioHome']);
          }
        });
    });
  }
}
