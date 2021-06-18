import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enviar-respuesta',
  templateUrl: './enviar-respuesta.component.html',
  styleUrls: ['./enviar-respuesta.component.scss'],
})
export class EnviarRespuestaComponent implements OnInit {
  public formRespuesta: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    this.formRespuesta = this.formBuilder.group({
      respuesta: ['', [Validators.required]],
    });
  }
  send() {}
  devolverNombreCompleto() {}
  ngOnInit(): void {}
}
