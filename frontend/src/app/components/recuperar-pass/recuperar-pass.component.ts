import { LoginService } from 'src/app/servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.scss'],
})
export class RecuperarPassComponent implements OnInit {
  public formRecuperar: FormGroup = new FormGroup({});
  constructor( private formBuilder: FormBuilder,private login:LoginService) {}

  ngOnInit(): void {
    this.formRecuperar = this.formBuilder.group({
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }
  send(){
      this.login.token().subscribe(data=>{
        
      });
  }
}
