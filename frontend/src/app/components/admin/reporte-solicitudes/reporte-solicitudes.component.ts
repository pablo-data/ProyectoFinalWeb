import { SolicitudesReclamoService } from 'src/app/servicios/solicitudes-reclamo.service';
import { UsuariosRegistradosService } from 'src/app/servicios/usuarios-registrados.service';
import { TicketForm } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss'],
})
export class ReporteSolicitudesComponent implements OnInit {
  public ticketForms: TicketForm[] = [];
  constructor(
    private router: Router,
    private usuarios: UsuariosRegistradosService,
    private solicitudes:SolicitudesReclamoService
  ) {}

  ngOnInit(): void {
    sessionStorage.removeItem('ticketForm');
    this.usuarios.cargarUsuarios().subscribe(data=>{
      data.message.forEach(item=>{
        this.solicitudes.getFormByUserAdmin(item.idUsuario).subscribe(form=>{
          if(form.message!=''){
            console.log(form.message);
            form.message.forEach(item=>{
              this.ticketForms.push(item);
            });
            this.ticketForms.forEach(item=>{
              this.solicitudes.getTicketByForm(item.idFormulario).subscribe(data=>{
                //devuelve el ticket asociado a un form
                item.respuesta = data.message[0].respuesta;
                item.estado = data.message[0].estado;
              });
            });
          }else{

          }
        });
      });
    });
  }
  
  /**
   * Redirige a la vista de enviar respuesta y toma el ticket seleccionado
   * como referencia para cargarlo en la nueva vista.
   * @param ticket ticket seleccionado por el administrador
   */
  irEditarEstado(ticket: TicketForm) {
    let id = ticket.idFormulario;
    this.ticketForms.forEach((item) => {
      if (item.idFormulario == id) {
        sessionStorage.setItem('ticketForm', JSON.stringify(item));
        this.router.navigate(['/cambiarEstado']);
        return;
      }
    });
  }
  /**
   * Redirige a la vista de enviar respuesta y toma el ticket seleccionado
   * como referencia para cargarlo en la nueva vista.
   * @param ticket ticket seleccionado por el administrador
   */
  irEnviarRespuesta(ticket: TicketForm) {
    let id = ticket.idFormulario;
    this.ticketForms.forEach((item) => {
      if (item.idFormulario == id) {
        sessionStorage.setItem('ticketForm', JSON.stringify(item));
        this.router.navigate(['/enviarRespuesta']);
        return;
      }
    });
  }
}
