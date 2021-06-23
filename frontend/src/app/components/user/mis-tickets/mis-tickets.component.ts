import { Ticket } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { TicketForm } from 'src/app/interfaces/Usuario';
import { SolicitudesReclamoService } from 'src/app/servicios/solicitudes-reclamo.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mis-tickets',
  templateUrl: './mis-tickets.component.html',
  styleUrls: ['./mis-tickets.component.scss'],
})
export class MisTicketsComponent implements OnInit {
  public formFiltro: FormGroup = new FormGroup({});
  public ticketForms: TicketForm[] = [];
  public ticketFormsAux: TicketForm[] = [];
  public ticketFormAux2: TicketForm[] = [];
  public ticketFormAux3: TicketForm[] = [];
  public mensaje: string;
  public contador: number;
  public enFiltro: boolean = false;
  constructor(
    private solicitud: SolicitudesReclamoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTickets();
    this.formFiltro = this.formBuilder.group({
      filtro: ['', Validators.required],
    });
  }
  ver() {
    this.enFiltro = true;
    this.contador = 0;
    this.ticketForms=[...this.ticketFormAux3];
    this.ticketFormsAux=[];
    switch (this.formFiltro.get('filtro').value) {
      case 'resp':
        this.verRespondidos();
        break;
      case 'alta':
        this.verPrioridad(1);
        break;
      case 'media':
        this.verPrioridad(2);
        break;
      case 'baja':
        this.verPrioridad(3);
        break;
      case 'Todos':
        this.reiniciar();
        break;
    }
     
  }
  verPrioridad(idPrioridad: number) {
    this.ticketForms.forEach((item) => {
      if (item.prioridad_idPrioridad == idPrioridad) {
        this.ticketFormsAux.push(item);
        this.contador++;
      }
    });
    this.ticketFormAux2 = [...this.ticketForms];
    this.ticketForms = [...this.ticketFormsAux];
  }
  verRespondidos() {
    this.ticketForms.forEach((item) => {
      if (item.respuesta != '') {
        this.ticketFormsAux.push(item);
        this.contador++;
      }
    });
    this.ticketFormAux2 = [...this.ticketForms];
    this.ticketForms = [...this.ticketFormsAux];
  }
  reiniciar() {
    this.ticketForms = [...this.ticketFormAux3];
    this.ticketFormsAux = this.ticketFormAux2 = [];
    this.contador = this.ticketForms.length;
    this.enFiltro = false;
  }
  getTickets() {
    this.solicitud.getFormByUser().subscribe((data) => {
      if (data.message != '') {
        this.mensaje = '';
        //devuelve todos los forms asociados a un usuario
        this.ticketForms = data.message;
        this.ticketForms.forEach((item) => {
          this.solicitud
            .getTicketByForm(item.idFormulario)
            .subscribe((data) => {
              if (data.message != '') {
                this.mensaje = '';
                //devuelve el ticket asociado a un form
                item.respuesta = data.message[0].respuesta;
                item.estado = data.message[0].estado;
                this.contador = this.ticketForms.length;
                this.ticketFormAux3=[...this.ticketForms];
              } else {
                this.mensaje = 'Ha ocurrido un error inesperado';
              }
            });
        });
      } else {
        if (data.message == '') this.mensaje = 'Aun no tiene tickets';
        else if (data.error != '')
          this.mensaje = 'Ha ocurrido un error inesperado';
      }
    });
  }
}
