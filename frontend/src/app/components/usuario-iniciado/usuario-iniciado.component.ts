import { ReclamoService } from './../../servicios/reclamo.service';
import { LoginService } from 'src/app/servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-usuario-iniciado',
  templateUrl: './usuario-iniciado.component.html',
  styleUrls: ['./usuario-iniciado.component.scss'],
})
export class UsuarioIniciadoComponent implements OnInit {
  public formReclamo: FormGroup = new FormGroup({});
  public categorias: Array<string> = ['Solicitud generica', 'Solicitud de cambio', 'Incidente',
  'Problema','Solicitud de hardware','Solicitud de software nuevo'];
  public prioridades: Array<string> = ['Alta', 'Media', 'Baja'];
  public mensaje:string;
  private ticket:Ticket={asunto:'',prioridad_idPrioridad:0,descripcion:'',categoria:'',usuario_idUsuario:-1};
  constructor(
    private formBuilder: FormBuilder,
    private login:LoginService,
    private reclamo:ReclamoService
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
    this.ticket.asunto=this.formReclamo.get("asunto").value;
    this.ticket.descripcion = this.formReclamo.get('descripcion').value;
    this.ticket.categoria = this.formReclamo.get('categoria').value;

    this.ticket.usuario_idUsuario=this.login.idUsuario;
    let formValue=this.formReclamo.get("prioridad").value;
    switch (formValue) {
      case 'Alta':
        this.ticket.prioridad_idPrioridad = 5;
        break;
      case 'Media':
        this.ticket.prioridad_idPrioridad = 4;
        break;
      case 'Baja':
        this.ticket.prioridad_idPrioridad = 6;
        break;
    }
    this.reclamo.reclamo(this.ticket).subscribe(data=>{
        if(data.message=''){
          console.log("Error");
          this.mensaje="Ha ocurrido un error inesperado, intente más tarde";
        }else{
          console.log("Envio realizado");
          this.mensaje="Envio realizado con exito";
        }
    });
  }
}
