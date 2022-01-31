import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { loginAction } from '../../store/actions/login.action';
import { isLoggedInSelector } from '../../store/authSelectors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    isLoggedIn$!: Observable<boolean | null>;

    constructor(private formBuilder: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.inizializeForm();
        this.inizializeValues();
    }

    inizializeForm(): void {
        this.loginForm = this.formBuilder.group({
            email: [
                null,
                [
                    Validators.required,
                    Validators.email,
                    Validators.maxLength(30),
                ],
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(20),
                ],
            ],
        });
    }

    inizializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }
        const request: any = {
            ...this.loginForm.value,
        };
        console.log('loginForm', request);

        this.store.dispatch(loginAction({ request }));

        this.loginForm.reset();
    }
}
