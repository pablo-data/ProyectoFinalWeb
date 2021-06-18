import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root',
})
export class ReclamoService {
  constructor(private http:HttpClient) {}
  reclamo(ticket: Ticket):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.apiPostForm}`,JSON.stringify(ticket),{'headers': headers});
  }
}
