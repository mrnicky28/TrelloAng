import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { LoginData } from '../interfaces/loginData.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}

    login({ email, password }: any): Observable<any> {
        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    register({ email, password }: LoginData) {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }
    logout() {
        return signOut(this.auth);
    }
}
