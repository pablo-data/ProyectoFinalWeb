import { SolicitudesReclamoService } from './../../../servicios/solicitudes-reclamo.service';
import { Ticket } from './../../../../../../backend/src/app/models/ticket.model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketForm } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss'],
})
export class CambiarEstadoComponent implements OnInit {
  public estados: string[] = ['Abierto', 'Cerrado', 'Desarrollo'];
  public formEstado: FormGroup = new FormGroup({});
  public ticketForm: TicketForm;
  public nombreUsuario: string;
  public mensaje: string;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private reporte: SolicitudesReclamoService
  ) {
    this.formEstado = this.formBuilder.group({
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.ticketForm = JSON.parse(sessionStorage.getItem('ticketForm'));
    this.getUsuario().subscribe((data) => {
      if (data.message != '') {
        this.nombreUsuario =
          data.message[0].nombres + ' ' + data.message[0].apellidos;
      }
    });
  }
  send() {
    this.reporte
      .patchEstadoTicket(
        this.ticketForm.idFormulario,
        this.formEstado.get('estado').value
      )
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
  getUsuario(): Observable<any> {
    return this.http.get(
      `${environment.apiGetUser}${this.ticketForm.usuario_idUsuario}`
    );
  }
}
