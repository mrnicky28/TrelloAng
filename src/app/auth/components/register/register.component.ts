import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { RegisterRequestInterface } from '../../interfaces/registerRequest.interface';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/authSelectors';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    isSubmitting$!: Observable<boolean>;

    constructor(private formBuilder: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.inizializeForm();
        this.inizializeValues();
    }

    inizializeForm(): void {
        this.registerForm = this.formBuilder.group(
            {
                // username: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email]],
                password: [
                    null,
                    [
                        Validators.required,
                        Validators.minLength(10),
                        Validators.maxLength(30),
                    ],
                ],
                // confirmPassword: [null, Validators.required],
            },
            // {
            //     validator: MustMatch('password', 'confirmPassword'),
            // },
        );
    }

    inizializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        console.log('isSubmitting$', this.isSubmitting$);
    }

    onSubmit(): void {
        if (this.registerForm.invalid) return;

        const request: RegisterRequestInterface = {
            ...this.registerForm.value,
        };
        this.store.dispatch(registerAction({ request }));

        this.registerForm.reset();
        Object.keys(this.registerForm.controls).forEach((key) => {
            this.registerForm.controls[key].setErrors(null);
        });
    }
}
