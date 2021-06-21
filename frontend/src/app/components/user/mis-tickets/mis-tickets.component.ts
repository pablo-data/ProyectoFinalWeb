import { Component, OnInit } from '@angular/core';
import { TicketForm } from 'src/app/interfaces/Usuario';
import { SolicitudesReclamoService } from 'src/app/servicios/solicitudes-reclamo.service';

@Component({
  selector: 'app-mis-tickets',
  templateUrl: './mis-tickets.component.html',
  styleUrls: ['./mis-tickets.component.scss'],
})
export class MisTicketsComponent implements OnInit {
  public ticketForms: TicketForm[] = [];
  public mensaje:string;
  constructor(private solicitud:SolicitudesReclamoService) {}

  ngOnInit(): void {
     this.getTickets();
  }
  getTickets(){
    this.solicitud.getFormByUser().subscribe((data) => {
      if(data.message!=''){
        this.mensaje='';
        //devuelve todos los forms asociados a un usuario
        this.ticketForms = data.message;
        this.ticketForms.forEach((item) => {
          this.solicitud.getTicketByForm(item.idFormulario)
            .subscribe((data) => {
              if (data.message != '') {
                this.mensaje = '';
                //devuelve el ticket asociado a un form
                  item.respuesta = data.message[0].respuesta;
                  item.estado = data.message[0].estado;
              } else {
                this.mensaje = 'Ha ocurrido un error inesperado';
              }
            });
        });
      }else{
        if(data.message=='')this.mensaje="Aun no tiene tickets";
        else if(data.error!='')this.mensaje = 'Ha ocurrido un error inesperado';
      }
    });
  }
}