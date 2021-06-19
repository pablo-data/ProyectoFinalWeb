import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public usuario: string='';
  constructor(private http: HttpClient) {}
  validarLogin(usuario: string, password: string,token:string): Observable<any> {
    let headers = new HttpHeaders();
     headers = headers.append('Content-Type', 'application/json');
     headers = headers.append('access-token', token);
    console.log(usuario,password, token);
    /*
    const params = new HttpParams();
    params.set('email', usuario);
    params.set('password', password);
    */
    return this.http.get(
      `${environment.apiLogin}/login/user?email=${usuario}&password=${password}`,{ headers: headers }
    );
  }
  token(): Observable<any> {
    return this.http.get(`${environment.apiToken}`);
  }
}
