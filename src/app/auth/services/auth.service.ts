import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { FbAuthResponse } from 'src/app/shared/interfaces/FbAuthResponse.interface';

import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { LoginData } from '../interfaces/loginData.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}

    login({ email, password }: LoginData): Observable<any> {
        console.log(email, password);
        this.setToken;

        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    register({ email, password }: LoginData): Observable<any> {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }

    logout() {
        this.setToken(null);
        return from(this.auth.signOut());
    }

    get token(): string | null {
        return localStorage.getItem('accessToken');
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    private setToken(response: FbAuthResponse | null) {
        if (response) {
            const expDate = new Date(
                new Date().getTime() + +response.expiresIn * 1000,
            );
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        } else {
            localStorage.clear();
        }
    }
}
