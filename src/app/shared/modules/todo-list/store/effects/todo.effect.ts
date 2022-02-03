import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoService } from 'src/app/shared/services/todo.service';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
    loadAddTodosAction, loadAddTodosFailureAction, loadDeleteTodosAction,
    loadDeletetodosFailureAction, loadDeleteTodosSuccessAction, loadGetTodosAction,
    loadGetTodosFailureAction, loadGetTodosSuccessAction
} from '../actions/todo.action';

@Injectable()
export class TodoEffect {
    constructor(private actions$: Actions, private todoService: TodoService) {}

    getTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadGetTodosAction),
            switchMap(() => {
                return this.todoService.getTodos().pipe(
                    map((todos: any) => {
                        return loadGetTodosSuccessAction({ todos });
                    }),
                    catchError((error) => {
                        return of(loadGetTodosFailureAction(error));
                    }),
                );
            }),
        ),
    );

    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAddTodosAction),
            switchMap(({ todoText }) => {
                return this.todoService.addTodo(todoText).pipe(
                    map((todoText: any) => {
                        return loadGetTodosSuccessAction(todoText);
                    }),
                    catchError((error) => {
                        return of(loadAddTodosFailureAction(error));
                    }),
                );
            }),
        ),
    );

    deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadDeleteTodosAction),
            switchMap((action) => {
                return this.todoService.deleteTodo(action.todo).pipe(
                    map(() => {
                        return loadDeleteTodosSuccessAction();
                    }),
                    catchError((error) => {
                        return of(loadDeletetodosFailureAction(error));
                    }),
                );
            }),
        ),
    );
}
