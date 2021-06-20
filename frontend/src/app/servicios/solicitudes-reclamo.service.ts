import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesReclamoService {

  constructor(private http:HttpClient) { }
  getReclamos():Observable<any>{
    return this.http.get(`${environment.apiGetForms}`);
  }
  getTickets():Observable<any>{
      return this.http.get(`${environment.apiTickets}`);
  }
}
