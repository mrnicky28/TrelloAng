import { AuthService } from 'src/app/auth/services/auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    }
}
