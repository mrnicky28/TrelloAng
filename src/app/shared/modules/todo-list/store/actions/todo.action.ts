import { AllTodosType } from 'src/app/shared/interfaces/allTodos.type';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

import { createAction, props } from '@ngrx/store';

import { TodoActionTypes } from '../todoActionsTypes';

export const loadAddTodosAction = createAction(
    TodoActionTypes.ADD_TODO,
    props<{ todoText: string }>(),
);

export const loadAddTodosSuccessAction = createAction(
    TodoActionTypes.ADD_TODO_SUCCESS,
);

export const loadAddTodosFailureAction = createAction(
    TodoActionTypes.ADD_TODO_FAILURE,
    props<{ error: string }>(),
);

export const loadDeleteTodosAction = createAction(
    TodoActionTypes.DELETE_TODO,
    props<{ todo: Todo }>(),
);

export const loadDeleteTodosSuccessAction = createAction(
    TodoActionTypes.DELETE_TODO_SUCCESS,
);

export const loadDeletetodosFailureAction = createAction(
    TodoActionTypes.DELETE_TODO_FAILURE,
    props<{ error: string }>(),
);

export const loadGetTodosAction = createAction(TodoActionTypes.GET_TODO);

export const loadGetTodosSuccessAction = createAction(
    TodoActionTypes.GET_TODO_SUCCESS,
    props<{ todos: AllTodosType[] }>(),
);

export const loadGetTodosFailureAction = createAction(
    TodoActionTypes.GET_TODO_FAILURE,
    props<{ error: string }>(),
);

export const loadUpdateTodosAction = createAction(
    TodoActionTypes.UPDATE_TODO,
    props<{ todo: Todo }>(),
);

export const loadUpdateTodosSuccessAction = createAction(
    TodoActionTypes.UPDATE_TODO_SUCCESS,
);

export const loadUpdateTodosFailureAction = createAction(
    TodoActionTypes.UPDATE_TODO_FAILURE,
    props<{ error: string }>(),
);
