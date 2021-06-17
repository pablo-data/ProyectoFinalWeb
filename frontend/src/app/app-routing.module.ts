import { IniciarSesionAdminComponent } from './components/admin/iniciar-sesion-admin/iniciar-sesion-admin.component';
import { IniciarSesionUsuarioComponent } from './components/sesion/sesion.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ReporteSolicitudesComponent } from './components/admin/reporte-solicitudes/reporte-solicitudes.component';
import { ReporteUsuariosComponent } from './components/admin/reporte-usuarios/reporte-usuarios.component';
import { CambiarEstadoComponent } from './components/admin/cambiar-estado/cambiar-estado.component';
import { EnviarRespuestaComponent } from './components/admin/enviar-respuesta/enviar-respuesta.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioIniciadoComponent } from './components/usuario-iniciado/usuario-iniciado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:IniciarSesionUsuarioComponent },
  { path: 'adminIniciar',component:IniciarSesionAdminComponent},
  { path: 'usuarioHome', component: UsuarioIniciadoComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'adminHome',
    component: AdminHomeComponent,
    children: [
      { path: 'reporteUsuarios', component: ReporteUsuariosComponent },
      { path: 'reporteSolicitudes', component: ReporteSolicitudesComponent },
    ],
  },
  { path: 'enviarRespuesta', component: EnviarRespuestaComponent },
  { path: 'cambiarEstado', component: CambiarEstadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
