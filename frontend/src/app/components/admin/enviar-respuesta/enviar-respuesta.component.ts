import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketForm } from 'src/app/interfaces/Usuario';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-enviar-respuesta',
  templateUrl: './enviar-respuesta.component.html',
  styleUrls: ['./enviar-respuesta.component.scss'],
})
export class EnviarRespuestaComponent implements OnInit {
  public formRespuesta: FormGroup = new FormGroup({});
  public ticket:TicketForm;
  public nombreUsuario:string;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router ) {
    this.formRespuesta = this.formBuilder.group({
      respuesta: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.ticket=JSON.parse(sessionStorage.getItem('ticket'));
    this.getUsuario().subscribe(data=>{
      if(data.message!=''){
        this.nombreUsuario=data.message[0].nombres+' '+data.message[0].apellidos;
      }
    });
  }

  send() {}
  getUsuario():Observable<any> {
    return this.http.get(`${environment.apiGetUser}${this.ticket.usuario_idUsuario}`);
  }
}
