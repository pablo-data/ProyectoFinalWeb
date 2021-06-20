import { Ticket } from 'src/app/interfaces/Usuario';
import { SolicitudesReclamoService } from './../../../servicios/solicitudes-reclamo.service';
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
  public contAbierto: number=0;
  public contCerrado: number=0;
  public contDesarrollo: number=0;

  constructor(
    private router: Router,
    private solicitudes: SolicitudesReclamoService
  ) {}

  ngOnInit(): void {
    this.solicitudes.getTickets().subscribe((data) => {
      if (data.message != '') {
        this.ticketForms = data.message;
        this.ticketForms.forEach((item) => {
          this.solicitudes.getForm(item.idTicket).subscribe((data) => {
            if (data.message != '') {
              item.asunto = data.message[0].asunto;
              item.descripcion = data.message[0].descripcion;
              item.respuesta=data.message[0].respuesta;
              console.log(item);
            }
          });
        });
      }
    });
  }
  setAbiertos(){
    this.contAbierto++;
  }
  setCerrados(){
    this.contCerrado++;
  }
  setDesarrollos(){
    this.contDesarrollo++;
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
      }
    });
  }
}
