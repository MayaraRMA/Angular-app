import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class ClientesGuard implements CanActivateChild {

    canActivateChild (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | boolean {
        return true
        //if(this.authService.usuarioEstaAutenticado()) {
        //  return true;
        //}
    
        //this.router.navigate(['/login']);
        //return false;
      }

}