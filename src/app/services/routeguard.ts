import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable()
export class AuthGuard implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    
    
    canActivate() {
        if(sessionStorage.length >= 3) {
            return true;
        }
    }
    
}