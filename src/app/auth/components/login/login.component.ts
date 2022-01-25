import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loginAction } from '../../store/actions/login.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    submmited: boolean | undefined;

    constructor(private formBuilder: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.inizializeForm();
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

    onSubmit(): void {
        const request: any = {
            ...this.loginForm.value,
        };
        this.store.dispatch(loginAction({ request }));
    }
}
