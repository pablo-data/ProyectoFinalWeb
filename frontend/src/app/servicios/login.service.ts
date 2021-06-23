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
   * Obtiene al usuario o administrador mediante su email, pensado 
   * para la recuperación de contraseña.
   * @param correo correo del usuario.
   * @param token token.
   * @returns 
   */
  getUserByMail(correo:string,token:string,esAdmin:boolean):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);
    if(!esAdmin)return this.http.get(`${environment.apiForgotUser}${correo}`,{'headers':headers});
    else return this.http.get(`${environment.apiForgotAdmin}${correo}`,{'headers':headers});
  }
  /**
   * Establece la nueva contraseña del usuarioo administrador
   * mediante la pregunta y respuesta secreta.
   * @param id id del usuario.
   * @param datos objeto compuesto por: contraseña, pregunta y respuesta secreta.
   * @param token token.
   * @returns 
   */
  patchNewPass(id:number,datos:{},token:string,esAdmin:boolean):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('access-token', token);
    if(!esAdmin)return this.http.patch(`${environment.apiPatchNewPass}${id}`,JSON.stringify(datos),{'headers':headers});
    else return this.http.patch(`${environment.apiPatchNewPassAdmin}${id}`,JSON.stringify(datos),{'headers':headers});
  }
  /**
   * Entrega la id del usuario actual, con propositos de interacción
   * con ciertas partes del sitio.
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
  validarLoginUser(usuario: string,password: string,token: string): Observable<any> {
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