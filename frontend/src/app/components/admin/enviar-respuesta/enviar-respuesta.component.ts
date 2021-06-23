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
  public mensaje:string;
  public nombreUsuario:string;
  public respuestaActual:string;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private reporte:SolicitudesReclamoService ) {
    this.formRespuesta = this.formBuilder.group({
      respuesta: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.ticketForm = JSON.parse(sessionStorage.getItem('ticketForm'));
    console.log(this.ticketForm);
    this.getUsuario().subscribe(data=>{
      if(data.message!=''){
        this.nombreUsuario=data.message[0].nombres+' '+data.message[0].apellidos;
      }
    });
  }
  send() {
    this.reporte.patchRespuestaTicket(this.ticketForm.idFormulario, this.formRespuesta.get('respuesta').value)
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
  setRespuesta(){
    return this.ticketForm.respuesta;
  }
  getUsuario():Observable<any> {
    return this.http.get(`${environment.apiGetUser}${this.ticketForm.usuario_idUsuario}`);
  }
}
