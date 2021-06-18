import { SolicitudesReclamoService } from './../../../servicios/solicitudes-reclamo.service';
import { Ticket } from './../../../interfaces/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss'],
})
export class ReporteSolicitudesComponent implements OnInit {
  public tickets: Ticket[] = [];
  constructor(private router: Router,private solicitudes:SolicitudesReclamoService) {}

  ngOnInit(): void {
    this.solicitudes.getReclamos().subscribe(data=>{
      if(data.message==""){

      }else{
        this.tickets=data.message;
      }
    });
  }
  irEditarEstado(ticket: Ticket) {
    console.log(ticket);
    this.router.navigate(['/cambiarEstado']);
  }
  irEnviarRespuesta(ticket:Ticket){
    console.log(ticket);
    this.router.navigate(['/enviarRespuesta']);
  }
}
