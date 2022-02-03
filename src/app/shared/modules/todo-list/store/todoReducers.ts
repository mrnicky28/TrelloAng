import { TodoStateInterface } from 'src/app/shared/interfaces/todoStateInterface';

import { Action, createReducer, on } from '@ngrx/store';

import {
    loadAddTodosAction, loadAddTodosFailureAction, loadAddTodosSuccessAction, loadDeleteTodosAction,
    loadDeletetodosFailureAction, loadDeleteTodosSuccessAction, loadGetTodosAction,
    loadGetTodosFailureAction, loadGetTodosSuccessAction, loadUpdateTodosAction,
    loadUpdateTodosFailureAction, loadUpdateTodosSuccessAction
} from './actions/todo.action';

const initialState: TodoStateInterface = {
    data: null,
    error: null,
    isLoading: false,
};

export const todoReducer = createReducer(
    initialState,
    on(loadGetTodosAction, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadGetTodosSuccessAction, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.todos,
    })),
    on(loadGetTodosFailureAction, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),

    on(loadAddTodosAction, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadAddTodosSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(loadAddTodosFailureAction, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),

    on(loadUpdateTodosAction, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadUpdateTodosSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(loadUpdateTodosFailureAction, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),

    on(loadDeleteTodosAction, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(loadDeleteTodosSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(loadDeletetodosFailureAction, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
);

export function reducer(state: any, action: Action) {
    return todoReducer(state, action);
}
