import { miAdmin } from './../../../interfaces/admin';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderLoginService } from 'src/app/servicios/header-login.service';

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
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private headerLog: HeaderLoginService
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
  send(): any {
    this.loguearse();
    //aca deberia comunicarse con la bd y esperar la respuesta,
    //luego si el inicio de sesion es valido cambiar la vista
  }
  loguearse() {
    //test
    this.data = miAdmin;
    this.headerLog.headerTrigger.emit(this.data);
    this.router.navigate(['/adminHome']);
  }
  /**
   * Comprueba que el formulario este completo
   */
  checkForm(): boolean {
    if (this.formLogin.invalid) return false;
    else return true;
  }
  recordar() {
    //
  }
}
