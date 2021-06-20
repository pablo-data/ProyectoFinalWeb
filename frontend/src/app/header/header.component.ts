import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public nombreUsuario: string = '';
  public usuarioIniciado: boolean = false;
  public esAdmin: boolean = false;
  constructor(
    private login: LoginService,
  ) {}

  ngOnInit(): void {
    if (this.login.logueado())this.nombreUsuario=this.login.getNombreUsuario();
    this.nombreUsuario =this.login.getNombreUsuario();
    if (sessionStorage.getItem('esAdmin') == 'true') this.esAdmin = true;
    if(sessionStorage.getItem('enSesion'))this.usuarioIniciado = true;
  }
}
