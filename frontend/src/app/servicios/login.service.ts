import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  /**
   * Loguea al usuario segun su rol
   * @param esAdmin si es admin o no
   * @param id la id del usuario o admin
   */
  setLogueoStatus(esAdmin: string, id: number) {
    sessionStorage.setItem('esAdmin', esAdmin);
    sessionStorage.setItem('enSesion', 'true');
    sessionStorage.setItem('idUsuario', id.toString());
    this.getUser().subscribe(data=>{
      sessionStorage.setItem('nombreUsuario', data.message.nombres+' '+data.message.apellidos);
    });
  }
  getNombreUsuario(): string {
    return sessionStorage.getItem('nombreUsuario');
  }
  /**
   * 
   * @returns devuelve la id del usuario o admin.
   */
  getIdUsuario(): number {
    return Number.parseInt(sessionStorage.getItem('idUsuario'));
  }
  /**
   * Verifica que el usuario se encuentra logueado
   * @returns si el usuario está logueado o no
   */
  logueado(): boolean {
    if (sessionStorage.getItem('enSesion') != null) return true;
    else return false;
  }
  validarLoginUser(
    usuario: string,
    password: string,
    token: string
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);

    return this.http.get(
      `${environment.apiLoginUser}/login/user?email=${usuario}&password=${password}`,
      { headers: headers }
    );
  }
  validarLoginAdmin(
    usuario: string,
    password: string,
    token: string
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);

    return this.http.get(
      `${environment.apiLoginAdmin}?email=${usuario}&password=${password}`,
      { headers: headers }
    );
  }
  /**
   * Solicita el token.
   * @returns devuelve el token
   */
  token(): Observable<any> {
    return this.http.get(`${environment.apiToken}`);
  }
  getUser(): Observable<any> {
    return this.http.get(`${environment.apiGetUser}${sessionStorage.getItem('idUsuario')}`);
  }
}
