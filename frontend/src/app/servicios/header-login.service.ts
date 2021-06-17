import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio dedicado a actualizar el Header con el nombre del 
 * usuario que se ha logueado en la web.
 */
export class HeaderLoginService {
  @Output() headerTrigger:EventEmitter<any>=new EventEmitter();
  constructor() { }
}
