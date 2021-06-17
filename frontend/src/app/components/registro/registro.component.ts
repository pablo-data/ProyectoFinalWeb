import { regionesI } from './../../interfaces/regiones';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/interfaces/regiones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public formRegistro: FormGroup = new FormGroup({});
  public regiones: Array<Region> = [];
  public comunasRegion: Array<string> = [];

  constructor(private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: ['', Validators.required],
      direccion: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2:['',Validators.required]
    });
    //Se agregan las regiones de la interface.
    this.regiones = regionesI;
  }
  /**
   * Asigna al arreglo de comunasRegion las comunas que pertenezcan a la region seleccionada
   * por el usuario en el HTML.
   * @param regionSelect region seleccionada desde el HTML
   */
  seleccionarRegion(comunasSelect: Array<string>) {
    this.comunasRegion = comunasSelect;
  }
  error(){}
  registrarse():any {
    //Aqui deberia comunicarse con la bd
    //en caso exitoso: 
    this.router.navigate(['misesion']);
  }
}
