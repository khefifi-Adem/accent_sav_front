import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class SuperVisorAssignedGuard implements CanActivate {
    constructor(private router: Router, private helper: JwtHelperService) {}

    canActivate() {
        const authorities = localStorage.getItem('authorities');
        if (authorities !== 'supervisor' && authorities !== 'assigned') {
            return false;
        }

        this.router.navigate(['/pages/dashboard']);
        return true;
    }

}
