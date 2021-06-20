import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosRegistradosService } from 'src/app/servicios/usuarios-registrados.service';

@Component({
  selector: 'app-reporte-usuarios',
  templateUrl: './reporte-usuarios.component.html',
  styleUrls: ['./reporte-usuarios.component.scss'],
})
export class ReporteUsuariosComponent implements OnInit {
  private fRut: string = '';
  private fComuna: string = '';
  private fRegion: string = '';
  public contadorTabla: number = 1;
  public usuarios: Usuario[] = [];
  constructor(private usuariosReg: UsuariosRegistradosService,private router:Router) {}
  ngOnInit(): void {
    this.usuarios = this.usuariosReg.usuariosRegistrados;
    console.log(this.usuarios);
  }
  //#region Metodos de filtro
  /**
   * Asigna al string fRut el input de filtro por comuna
   * que ingresa el usuario
   * @param valor input del usuario
   */
  filtroRut(valor: any) {
    this.fRut = valor.target.value.trim();
    this.fRegion = this.fComuna = '';
  }
  /**
   * Asigna al string fComuna el input de filtro por comuna
   * que ingresa el usuario
   * @param valor input del usuario
   */
  filtroComuna(valor: any) {
    this.fComuna = valor.target.value.trim();
    this.fRut = this.fRegion = '';
  }
  /**
   * Asigna al string fRegion el input de filtro por comuna
   * que ingresa el usuario
   * @param valor input del usuario
   */
  filtroRegion(valor: any) {
    this.fRegion = valor.target.value.trim();
    this.fComuna = this.fRut = '';
  }
  /**
   * Filtra el contenido de la tabla segun el filtro ingresado
   * por el usuario, buscando si lo ingresado por el usuario
   * se encuentra como un substring dentro de la propiedad que
   * corresponda de la tablaUsuarios.
   *
   * Solamente se aplica un filtro a la vez.
   */
  filtrar() {
    this.usuarios = [];
    if (this.fRut != '') {
      this.usuariosReg.usuariosRegistrados.forEach((x) => {
        if (x.rut.includes(this.fRut)) {
          this.usuarios.push(x);
        }
      });
    } else if (this.fComuna != '') {
      this.usuariosReg.usuariosRegistrados.forEach((x) => {
        if (x.comuna.includes(this.fComuna)) {
          this.usuarios.push(x);
        }
      });
    } else if (this.fRegion != '') {
      this.usuariosReg.usuariosRegistrados.forEach((x) => {
        if (x.region.includes(this.fRegion)) {
          this.usuarios.push(x);
        }
      });
    }
  }
  /**
   * Reinicia la tabla de usuarios cuando se hace un filtro y
   * cuando el administrador cambia a la vista de "REPORTE DE SOLICITUDES".
   */
  reiniciar() {
    this.contadorTabla = 1;
    this.usuarios = this.usuariosReg.usuariosRegistrados;
  }
  //#endregion
}
