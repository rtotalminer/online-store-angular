import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';
import { data } from 'src/config/data';


@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private userService: UserService,
        private storeService: StoreService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.userService.userValue;
        if (user) {
            return true;
        }
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}