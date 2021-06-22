import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosRegistradosService {
  constructor(private http: HttpClient) {}
  cargarUsuarios(): Observable<any> {
    return this.http.get(`${environment.apiGetUsers}`);
  }
}
