import { HeaderLoginService } from './../servicios/header-login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public nombreUsuario: string = '';
  public usuarioIniciado: boolean = false;
  constructor(private headerLog:HeaderLoginService) {}

  ngOnInit(): void {
    this.headerLog.headerTrigger.subscribe(data=>{
      console.log(data);
      this.nombreUsuario=data.nombres+' '+data.apellidos;
      this.usuarioIniciado=true;
    });
  }
}
