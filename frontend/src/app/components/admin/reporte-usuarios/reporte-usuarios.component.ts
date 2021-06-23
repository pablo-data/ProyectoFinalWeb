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
  public usuarios: Usuario[] = [];
  public usuariosAux:Usuario[]=[];
  public usuariosOriginal:Usuario[]=[];
  constructor(
    private usuariosReg: UsuariosRegistradosService,
  ) {}
  ngOnInit(): void {
    this.usuariosReg.cargarUsuarios().subscribe((data) => {
      this.usuarios = data.message;
      this.usuariosOriginal=data.message;
    });
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
    if(this.fRut!='' || this.fComuna!='' || this.fRegion!=''){
      this.usuariosAux = [...this.usuariosOriginal];
      this.usuarios = [];
      if (this.fRut != '') {
        this.usuariosAux.forEach((x) => {
          if (x.rut.includes(this.fRut)) {
            this.usuarios.push(x);
          }
        });
      } else if (this.fComuna != '') {
        this.usuariosAux.forEach((x) => {
          if (x.comuna.includes(this.fComuna)) {
            this.usuarios.push(x);
          }
        });
      } else if (this.fRegion != '') {
        this.usuariosAux.forEach((x) => {
          if (x.region.includes(this.fRegion)) {
            this.usuarios.push(x);
          }
        });
      }
    }
  }
  /**
   * Reinicia la tabla de usuarios cuando se hace un filtro y
   * cuando el administrador cambia a la vista de "REPORTE DE SOLICITUDES".
   */
  reiniciar() {
    if(this.usuarios.length<this.usuariosAux.length){
       this.usuarios = [...this.usuariosOriginal];
       this.usuariosAux = [];
    }
  }
  //#endregion
}
