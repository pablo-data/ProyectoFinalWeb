import { Usuario } from './../../interfaces/Usuario';
import { RegistroService } from './../../servicios/registro.service';
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
  public mensaje:string='';
  constructor(private formBuilder: FormBuilder, public router: Router,private registro:RegistroService) {}

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
    let usuario: Usuario = {
      nombres: this.formRegistro.get('nombre').value,
      apellidos: this.formRegistro.get('apellido').value,
      rut: this.formRegistro.get('rut').value,
      direccion: this.formRegistro.get('direccion').value,
      comuna: this.formRegistro.get('comuna').value,
      email: this.formRegistro.get('email').value,
      region: this.formRegistro.get('region').value,
      contraseña: this.formRegistro.get('password').value,
    };
    this.registro.registrar(usuario).subscribe(data=>{
      if(data.error>0){
        this.mensaje="El usuario ya existe"
      }else{
        this.router.navigate(['usuarioHome']);
      }
    });
  }
}
