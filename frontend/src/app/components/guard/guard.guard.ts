import { LoginService } from './../../servicios/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.checkLogin(route);
  }
  checkLogin(route: ActivatedRouteSnapshot):boolean{
    if(this.login.logueado()){
      let esAdmin = sessionStorage.getItem('esAdmin');
      if(esAdmin=='true'){
        if (route.data.rol == 'admin') return true;
        else{sessionStorage.clear(); return false;}
      }else{
        if (route.data.rol == 'user') return true;
        else{sessionStorage.clear(); return false;}
      }
    }else{
      console.log("Redireccionando...");
      sessionStorage.clear();
      this.router.navigate(['']);
      return false;
    }
  }
  
}
