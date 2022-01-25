import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendError.interface';

import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../authActionsTypes';

export const loginAction = createAction(
    AuthActionTypes.LOGIN,
    props<{ request: any }>(),
);
export const loginSuccessAction = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: any }>(),
);

export const loginFailureAction = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendErrorsInterface }>(),
);
