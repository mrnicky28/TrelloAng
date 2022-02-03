import { TodoStateInterface } from 'src/app/shared/interfaces/todoStateInterface';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoFeatureSelector =
    createFeatureSelector<TodoStateInterface>('todo');

export const getTodosSelector = createSelector(
    todoFeatureSelector,
    (todoState: TodoStateInterface) => todoState.data,
);
export const getLoadingSelector = createSelector(
    todoFeatureSelector,
    (state) => state.isLoading,
);

export const getErrorSelector = createSelector(
    todoFeatureSelector,
    (state) => state.error,
);
