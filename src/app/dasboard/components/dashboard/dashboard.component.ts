import {
    AddTodoDialogComponent
} from 'src/app/shared/modules/add-todo-dialog/components/add-todo-dialog/add-todo-dialog.component';
import { loadGetTodosAction } from 'src/app/shared/modules/todo-list/store/actions/todo.action';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private store: Store, private dialog: MatDialog) {}

    ngOnInit(): void {}

    // dropHorizontal(event: CdkDragDrop<string[]>) {
    //     moveItemInArray(
    //         this.timePeriods,
    //         event.previousIndex,
    //         event.currentIndex,
    //     );
    // }

    openAddTodoDialog() {
        const dialogRef = this.dialog.open(AddTodoDialogComponent, {
            width: '40vw',
            data: {},
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getTodos();
        });
    }

    getTodos() {
        this.store.dispatch(loadGetTodosAction());
    }
}
