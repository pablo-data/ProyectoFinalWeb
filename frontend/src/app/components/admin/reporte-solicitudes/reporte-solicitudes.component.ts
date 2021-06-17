import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tablaUsuarios, Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss'],
})
export class ReporteSolicitudesComponent implements OnInit {
  public usuarios: Usuario[] = tablaUsuarios;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  irEditarEstado(usuario: Usuario) {
    console.log(usuario);
    this.router.navigate(['/cambiarEstado']);
  }
}
