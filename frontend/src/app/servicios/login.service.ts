import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public idUsuario:number;
  constructor(private http: HttpClient) {}
  validarLoginUser(
    usuario: string,
    password: string,
    token: string
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);
   
    return this.http.get(`${environment.apiLoginUser}/login/user?email=${usuario}&password=${password}`,{ headers: headers });
  }
  validarLoginAdmin(usuario: string,password: string,token: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);
    
    return this.http.get(`${environment.apiLoginAdmin}?email=${usuario}&password=${password}`,{ headers: headers });
  }
  token(): Observable<any> {
    return this.http.get(`${environment.apiToken}`);
  }
}
