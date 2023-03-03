import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, Observable, throwError } from 'rxjs'

import { AuthService } from './auth.services'

@Injectable()
export class AuthInterceptorService
    implements HttpInterceptor
{
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.authService.getToken()

        if (token) {
            // If we have a token, we set it to the header
            console.log('set token to header', token)
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log('error', error)
                if (
                    error instanceof HttpErrorResponse &&
                    error.status === 401
                ) {
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/log-in')
                }
                let errorMsg = ''
                if (error.error instanceof ErrorEvent) {
                    console.log('this is client side error')
                    errorMsg = `Error: ${error.error.message}`
                } else {
                    console.log('this is server side error')
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`
                }
                console.log(errorMsg)
                return throwError(errorMsg)
            })
        )
    }
}
