import {
    AddTodoDialogComponent
} from 'src/app/shared/modules/add-todo-dialog/components/add-todo-dialog/add-todo-dialog.component';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
    ];

    drop(event: CdkDragDrop<string[]>) {
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
            // this.getTodos();
        });
    }

    // getTodos() {
    //     this.store.dispatch(getTasks());
    // }
}
