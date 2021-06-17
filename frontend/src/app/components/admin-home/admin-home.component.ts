import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irReporteSolicitudes(){
    this.router.navigate(['adminHome/reporteSolicitudes']);
  }
  irReporteUsuarios(){
    this.router.navigate(['adminHome/reporteUsuarios']);

  }
}
