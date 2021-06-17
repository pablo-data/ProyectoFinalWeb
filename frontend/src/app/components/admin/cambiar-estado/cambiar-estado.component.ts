import { Usuario } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss'],
})
export class CambiarEstadoComponent implements OnInit {
  public usuarioSeleccionado: Usuario = {
    nombres: '',
    apellidos: '',
    direccion: '',
    rut: '',
    region: '',
    comuna: '',
    email: '',
    tickets: [],
  };
  public estados: string[] = ['Abierto', 'Cerrado', 'Desarrollo'];
  public formEstado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.formEstado = this.formBuilder.group({
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  devolverNombreCompleto() {
    return (
      this.usuarioSeleccionado.nombres +
      ' ' +
      this.usuarioSeleccionado.apellidos
    );
  }
  send(){
    
  }
}
