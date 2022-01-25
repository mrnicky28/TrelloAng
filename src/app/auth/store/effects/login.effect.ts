import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class RegisterEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {}

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) => {
                return this.authService.login(request).pipe(
                    map((currentUser: any) => {
                        return loginSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            loginFailureAction({
                                errors: errorResponse.error.errors,
                            }),
                        );
                    }),
                );
            }),
        ),
    );

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/');
                }),
            ),
        { dispatch: false },
    );
}
