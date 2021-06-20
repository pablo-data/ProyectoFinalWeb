import { Router } from '@angular/router';
import { ReclamoService } from './../../servicios/reclamo.service';
import { LoginService } from 'src/app/servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormReclamo, Ticket } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-usuario-iniciado',
  templateUrl: './usuario-iniciado.component.html',
  styleUrls: ['./usuario-iniciado.component.scss'],
})
export class UsuarioIniciadoComponent implements OnInit {
  public formReclamo: FormGroup = new FormGroup({});
  public categorias: Array<string> = [
    'Solicitud generica',
    'Solicitud de cambio',
    'Incidente',
    'Problema',
    'Solicitud de hardware',
    'Solicitud de software nuevo',
  ];
  public prioridades: Array<string> = ['Alta', 'Media', 'Baja'];
  public mensaje: string;
  private form: FormReclamo = {
    asunto: '',
    prioridad_idPrioridad: 0,
    descripcion: '',
    categoria: '',
    usuario_idUsuario: -1,
  };
  private ticket:Ticket={
    respuesta:'',estado:'',prioridad_idPrioridad:0,formulario_idFormulario:0
  }
  constructor(
    private formBuilder: FormBuilder,
    private login: LoginService,
    private reclamo: ReclamoService
  ) {}

  ngOnInit(): void {
    this.formReclamo = this.formBuilder.group({
      prioridad: ['', Validators.required],
      categoria: ['', Validators.required],
      asunto: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }
  reclamar() {
    this.form.asunto = this.formReclamo.get('asunto').value;
    this.form.descripcion = this.formReclamo.get('descripcion').value;
    this.form.categoria = this.formReclamo.get('categoria').value;

    this.form.usuario_idUsuario = this.login.getIdUsuario();
    let formValue = this.formReclamo.get('prioridad').value;
    
    switch (formValue) {
      case 'Alta':
        this.ticket.prioridad_idPrioridad=this.form.prioridad_idPrioridad = 5;
        break;
      case 'Media':
        this.ticket.prioridad_idPrioridad = this.form.prioridad_idPrioridad = 4;
        break;
      case 'Baja':
        this.ticket.prioridad_idPrioridad = this.form.prioridad_idPrioridad = 6;
        break;
    }
    this.reclamo.formReclamo(this.form).subscribe((data) => {
      if (data.message == '') {
        console.log('Error');
        this.mensaje = 'Ha ocurrido un error inesperado, intente más tarde';
      } else {
        console.log(data.message);
        this.ticket.formulario_idFormulario=data.message;
        this.reclamo.ticketReclamo(this.ticket).subscribe(data=>{
          console.log('Envio realizado');
          this.mensaje = 'Envio realizado con exito';
        });
      }
    });
  }
}