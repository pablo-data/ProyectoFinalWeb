import { Component, Input, OnInit } from '@angular/core';
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
  @Input() data;
  constructor(
    private login: LoginService,
  ) {}

  ngOnInit(): void {
    this.login.headerTrigger.subscribe(data=>{
      console.log(data);
      this.nombreUsuario=data;
      if (sessionStorage.getItem('esAdmin') == 'true') this.esAdmin = true;
      this.usuarioIniciado = true;
    });
    if (this.login.logueado())this.nombreUsuario=this.login.getNombreUsuario();
    if (sessionStorage.getItem('esAdmin') == 'true') this.esAdmin = true;
    if(sessionStorage.getItem('enSesion'))this.usuarioIniciado = true;
  }
}
