import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) => {
                return this.authService.login(request).pipe(
                    map((currentUser: any) => {
                        console.log('ergerg', currentUser);

                        return loginSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            loginFailureAction({
                                errors: errorResponse.error?.errors.message,
                            }),
                        );
                    }),
                );
            }),
        ),
    );

    loginAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('dashboard');
                }),
            ),
        { dispatch: false },
    );
}
