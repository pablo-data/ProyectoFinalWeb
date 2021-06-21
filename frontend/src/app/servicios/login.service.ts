import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  @Output() headerTrigger: EventEmitter<any> = new EventEmitter();
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
    if (esAdmin=='false') {
      this.getUsuario(environment.apiGetUser).subscribe((data) => {
        let nombre =data.message[0].nombres + ' ' + data.message[0].apellidos;
        sessionStorage.setItem('nombreUsuario',nombre);
        this.headerTrigger.emit(nombre);
      });
    } else {
      this.getUsuario(environment.apiGetAdmin).subscribe((data) => {
        let nombre = data.message[0].nombres + ' ' + data.message[0].apellidos;
        sessionStorage.setItem('nombreUsuario',nombre);
        this.headerTrigger.emit(nombre);
      });
    }
  }
  getRol(): boolean {
    if (sessionStorage.getItem('esAdmin') == 'true') return true;
    else return false;
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

    return this.http.get(`${environment.apiLoginUser}/login/user?email=${usuario}&password=${password}`,{ 'headers': headers });
  }
  validarLoginAdmin(
    usuario: string,
    password: string,
    token: string
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);

    return this.http.get(`${environment.apiLoginAdmin}?email=${usuario}&password=${password}`,{ 'headers': headers });
  }
  /**
   * Solicita el token.
   * @returns devuelve el token
   */
  token(): Observable<any> {
    return this.http.get(`${environment.apiToken}`);
  }
  private getUsuario(rutaApi:string): Observable<any> {
    return this.http.get(`${rutaApi}${sessionStorage.getItem('idUsuario')}`);
  }
}
