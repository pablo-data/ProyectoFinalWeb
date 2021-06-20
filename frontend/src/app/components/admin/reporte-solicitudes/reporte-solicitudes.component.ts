import { SolicitudesReclamoService } from './../../../servicios/solicitudes-reclamo.service';
import { Ticket, TicketForm } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss'],
})
export class ReporteSolicitudesComponent implements OnInit {
  public ticketForms: TicketForm[] = [];
  private tickets:Ticket[]=[];
  constructor(
    private router: Router,
    private solicitudes: SolicitudesReclamoService
  ) {}

  ngOnInit(): void {
    this.solicitudes.getReclamos().subscribe((data) => {
      if (data.message == '') {
      } else {
        this.ticketForms = data.message;
        console.log(this.ticketForms);
      }
    });
    this.solicitudes.getTickets().subscribe(data=>{
      if(data.message!=''){
        this.tickets=data.message;
      }
    });
  }
  irEditarEstado(ticket: TicketForm) {
    let id = ticket.idFormulario;
    console.log(ticket);
    this.tickets.forEach((item) => {
      if (item.formulario_idFormulario == id) {
        sessionStorage.setItem('ticket', JSON.stringify(item));
        this.router.navigate(['/cambiarEstado']);
      }
    });
    this.ticketForms.forEach(item=>{
      if(item.idFormulario==id){
        sessionStorage.setItem('ticketForm',JSON.stringify(item));
      }
    });
  }
  irEnviarRespuesta(ticket: TicketForm) {
    let id=ticket.idFormulario;
    console.log(ticket);
    this.tickets.forEach(item=>{
      if (item.formulario_idFormulario == id) {
        sessionStorage.setItem('ticket', JSON.stringify(item));
        this.router.navigate(['/enviarRespuesta']);
      }
    });
    this.ticketForms.forEach((item) => {
      if (item.idFormulario == id) {
        sessionStorage.setItem('ticketForm', JSON.stringify(item));
      }
    });
  }
}
