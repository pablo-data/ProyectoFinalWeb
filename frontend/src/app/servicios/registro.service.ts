import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
  constructor(private http:HttpClient) { }
  registrar(usuario:Usuario):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.apiPostUser}`,JSON.stringify(usuario),{'headers':headers});
  }
}
