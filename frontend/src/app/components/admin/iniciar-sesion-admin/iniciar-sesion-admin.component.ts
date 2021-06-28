import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-iniciar-sesion-admin',
  templateUrl: './iniciar-sesion-admin.component.html',
  styleUrls: ['./iniciar-sesion-admin.component.scss'],
})
export class IniciarSesionAdminComponent implements OnInit {
  public formLogin: FormGroup = new FormGroup({});
  screenHeight: any;
  screenWidth: any;
  public siteKey: string = '';
  public llenadoCompleto: boolean = false;
  public mensaje: string;
  public theme: 'light' | 'dark' = 'dark';
  public size: 'compact' | 'normal' = 'normal';
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 348) this.size = 'compact';
    else this.size = 'normal';
  }
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private login: LoginService
  ) {
    this.siteKey = '6LdZ8CgbAAAAACt5zy_JxiKcrrDJKjSeKfw-9Wf6';
    this.onResize();
  }

  ngOnInit(): void {
    sessionStorage.removeItem('recuperarAdmin');
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }
  recuperarPass() {
    sessionStorage.setItem('recuperarAdmin', 'true');
    this.router.navigate(['/recuperacion']);
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
            this.mensaje = 'Usuario no encontrado';
          } else {
            this.mensaje = '';
            this.login.setLogueoStatus('true', data.message[0].idAdmin);
            this.router.navigate(['/adminHome']);
          }
        });
    });
  }
}
