import { Ticket } from './../../../../../../backend/src/app/models/ticket.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketForm } from 'src/app/interfaces/Usuario';
import { environment } from 'src/environments/environment';
import { SolicitudesReclamoService } from 'src/app/servicios/solicitudes-reclamo.service';

@Component({
  selector: 'app-enviar-respuesta',
  templateUrl: './enviar-respuesta.component.html',
  styleUrls: ['./enviar-respuesta.component.scss'],
})
export class EnviarRespuestaComponent implements OnInit {
  public formRespuesta: FormGroup = new FormGroup({});
  public ticketForm:TicketForm;
  private ticket:Ticket;
  public mensaje:string;
  public nombreUsuario:string;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private reporte:SolicitudesReclamoService ) {
    this.formRespuesta = this.formBuilder.group({
      respuesta: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
    this.ticketForm = JSON.parse(sessionStorage.getItem('ticketForm'));
    this.getUsuario().subscribe(data=>{
      if(data.message!=''){
        this.nombreUsuario=data.message[0].nombres+' '+data.message[0].apellidos;
      }
    });
  }

  send() {

    this.reporte.patchRespuestaTicket(this.ticket.idTicket, this.formRespuesta.get('respuesta').value)
      .subscribe((data) => {
        if (data.message != '') {
          this.mensaje = '';
          this.router.navigate(['/adminHome/reporteSolicitudes']);
        } else {
          this.mensaje =
            'Ha ocurrido un error inesperado, intente nuevamente más tarde';
        }
      });
  }
  getUsuario():Observable<any> {
    return this.http.get(`${environment.apiGetUser}${this.ticketForm.usuario_idUsuario}`);
  }
}
