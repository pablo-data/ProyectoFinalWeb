import { HeaderLoginService } from './../../servicios/header-login.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-iniciado',
  templateUrl: './usuario-iniciado.component.html',
  styleUrls: ['./usuario-iniciado.component.scss'],
})
export class UsuarioIniciadoComponent implements OnInit {
  public formReclamo: FormGroup = new FormGroup({});
  public categorias: Array<string> = ['Abierto', 'Desarrollo', 'Cerrado'];
  public prioridades: Array<string> = ['Alta', 'Media', 'Baja'];
  
  constructor(
    private formBuilder: FormBuilder,
    private headerLog:HeaderLoginService
  ) {}

  ngOnInit(): void {
    this.formReclamo = this.formBuilder.group({
      prioridad: ['', Validators.required],
      categoria: ['', Validators.required],
      asunto: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }
  reclamar() {}
}
