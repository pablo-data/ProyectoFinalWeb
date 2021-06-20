import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-iniciar-sesion-admin',
  templateUrl: './iniciar-sesion-admin.component.html',
  styleUrls: ['./iniciar-sesion-admin.component.scss'],
})
export class IniciarSesionAdminComponent implements OnInit {
  @Input() data: any;
  public formLogin: FormGroup = new FormGroup({});
  public siteKey: string = '';
  public llenadoCompleto: boolean = false;
  public mensaje:string;
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
  send() {
    this.login.token().subscribe((token) => {
      this.login
        .validarLoginAdmin(
          this.formLogin.get('email').value,
          this.formLogin.get('password').value,
          token.message
        )
        .subscribe((data) => {
          if (data.message == '') {
            console.log('Login no existe');
            this.mensaje="Usuario no encontrado";
          } else {
            this.data = data;
            this.mensaje ='';
            this.login.setLogueoStatus('true', data.message[0].idUsuario);
            this.router.navigate(['/adminHome']);
          }
        });
    });
  }
}
