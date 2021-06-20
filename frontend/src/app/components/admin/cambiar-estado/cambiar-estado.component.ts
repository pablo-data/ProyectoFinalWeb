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
  private ticket:Ticket;
  public nombreUsuario: string;
  public mensaje:string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router) {
    this.formEstado = this.formBuilder.group({
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
    this.ticketForm=JSON.parse(sessionStorage.getItem('ticketForm'));
    this.getUsuario().subscribe((data) => {
      console.log(data);
      if (data.message != '') {
        this.nombreUsuario =
          data.message[0].nombres + ' ' + data.message[0].apellidos;
      }
    });
  }
  send() {
    this.patchTicket(this.ticket.idTicket,this.formEstado.get("estado").value).subscribe(data=>{
      if(data.message!=''){
        this.mensaje='';
        console.log(data);
        this.router.navigate(['/adminHome/reporteSolicitudes']);
      }else{
        this.mensaje="Ha ocurrido un error inesperado, intente nuevamente más tarde";
      }
    });
  }
  patchTicket(idTicket: number,estado:string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    return this.http.patch(`${environment.apiTicket}${idTicket}`,{'estado': estado} ,{ 'headers': headers });
  }
  getUsuario(): Observable<any> {
    return this.http.get(`${environment.apiGetUser}${this.ticketForm.usuario_idUsuario}`);
  }
}
