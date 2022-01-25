import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[matchingControlName];

        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ mustMatch: true });
        } else {
            confirmPassword.setErrors(null);
        }
    };
}
