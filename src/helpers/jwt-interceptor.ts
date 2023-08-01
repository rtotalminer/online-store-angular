import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/config/enviroment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO: Either use the StoreService or UserSerivce. StoreService would be more consistent.
        const user = this.userService.userValue;
        const isLoggedIn = user?.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.token}` }
            });
        }

        return next.handle(request);
    }
}