import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../interfaces/authState.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import {
    registerAction, registerFailureAction, registerSuccessAction
} from './actions/register.action';

const initailState: AuthStateInterface = {
    isLoading: false,
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
};

const authReducer = createReducer(
    initailState,
    on(registerAction, (state): any => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
    })),
    on(registerSuccessAction, (state, action): any => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(registerFailureAction, (state, action): any => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
    })),
    on(loginAction, (state): any => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
    })),
    on(loginSuccessAction, (state, action): any => ({
        ...state,
        isSubmmiting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(loginFailureAction, (state, action) => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
    })),
);

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
