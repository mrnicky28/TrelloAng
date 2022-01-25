import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendError.interface';

import { createAction, props } from '@ngrx/store';

import { RegisterRequestInterface } from '../../interfaces/registerRequest.interface';
import { AuthActionTypes } from '../authActionsTypes';

export const registerAction = createAction(
    AuthActionTypes.REGISTER,
    props<{ request: RegisterRequestInterface }>(),
);

export const registerSuccessAction = createAction(
    AuthActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: any }>(),
);

export const registerFailureAction = createAction(
    AuthActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>(),
);
