import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesReclamoService {
  constructor(private http: HttpClient) {}
  getForms(): Observable<any> {
    return this.http.get(`${environment.apiGetForms}`);
  }
  getTickets(): Observable<any> {
    return this.http.get(`${environment.apiTickets}`);
  }
  getForm(id:number):Observable<any>{
    return this.http.get(`${environment.apiGetForm}${id}`);
  }
  patchEstadoTicket(idTicket: number, estado: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.patch(`${environment.apiTicket}${idTicket}`,{ 'estado': estado },{ 'headers': headers });
  }
  patchRespuestaTicket(idTicket:number,respuesta:string):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.patch(`${environment.apiTicket}${idTicket}`,{ 'respuesta': respuesta },{ 'headers': headers });
  }
}
