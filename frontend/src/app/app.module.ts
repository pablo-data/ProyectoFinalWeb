import { IniciarSesionUsuarioComponent } from './components/user/sesion/sesion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioIniciadoComponent } from './components/user/usuario-iniciado/usuario-iniciado.component';
import { CambiarEstadoComponent } from './components/admin/cambiar-estado/cambiar-estado.component';
import { EnviarRespuestaComponent } from './components/admin/enviar-respuesta/enviar-respuesta.component';
import { ReporteUsuariosComponent } from './components/admin/reporte-usuarios/reporte-usuarios.component';
import { ReporteSolicitudesComponent } from './components/admin/reporte-solicitudes/reporte-solicitudes.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IniciarSesionAdminComponent } from './components/admin/iniciar-sesion-admin/iniciar-sesion-admin.component';
import { RecuperarPassComponent } from './components/recuperar-pass/recuperar-pass.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SolicitudReclamoComponent } from './components/user/solicitud-reclamo/solicitud-reclamo.component';
import { MisTicketsComponent } from './components/user/mis-tickets/mis-tickets.component';
@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionUsuarioComponent,
    RegistroComponent,
    UsuarioIniciadoComponent,
    CambiarEstadoComponent,
    EnviarRespuestaComponent,
    ReporteUsuariosComponent,
    ReporteSolicitudesComponent,
    AdminHomeComponent,
    HeaderComponent,
    IniciarSesionAdminComponent,
    RecuperarPassComponent,
    SolicitudReclamoComponent,
    MisTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxCaptchaModule,
    MatSelectModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
