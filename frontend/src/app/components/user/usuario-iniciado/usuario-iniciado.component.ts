import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-iniciado',
  templateUrl: './usuario-iniciado.component.html',
  styleUrls: ['./usuario-iniciado.component.scss'],
})
export class UsuarioIniciadoComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router:Router){}
  irReclamo() {
    this.router.navigate(['/usuarioHome/solicitudReclamo']);
  }
  irTickets() {
    this.router.navigate(['/usuarioHome/misTickets']);
  }
}