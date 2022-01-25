import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendError.interface';

export interface AuthStateInterface {
    isLoading: boolean;
    isSubmitting: boolean;
    currentUser: any | null;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrorsInterface | null;
}
