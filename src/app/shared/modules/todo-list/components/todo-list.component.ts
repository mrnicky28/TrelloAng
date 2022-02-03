import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';

import {
    AddTodoDialogComponent
} from '../../add-todo-dialog/components/add-todo-dialog/add-todo-dialog.component';
import { loadDeleteTodosAction, loadGetTodosAction } from '../store/actions/todo.action';
import { getTodosSelector } from '../store/todoSelectors';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
    todo: any = [];
    currentTodo$!: Observable<any>;

    constructor(private dialog: MatDialog, private store: Store) {}

    ngOnInit(): void {
        this.inizializeValues();
        this.getTasks();
    }

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
    ];

    drop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    openAddTodoDialog(): void {
        const dialogRef = this.dialog.open(AddTodoDialogComponent, {
            width: '40vw',
            data: {},
        });
        dialogRef.afterClosed().subscribe(() => {
            this.getTasks();
        });
    }

    inizializeValues(): void {
        this.currentTodo$ = this.store.pipe(select(getTodosSelector));
    }

    getTasks(): void {
        this.store.dispatch(loadGetTodosAction());
    }

    deleteTodo(todo: Todo): void {
        this.store.dispatch(loadDeleteTodosAction({ todo }));
        this.getTasks();
    }
}
