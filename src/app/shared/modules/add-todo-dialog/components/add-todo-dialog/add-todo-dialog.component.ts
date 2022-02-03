import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { loadAddTodosAction } from '../../../todo-list/store/actions/todo.action';

@Component({
    selector: 'app-add-todo-dialog',
    templateUrl: './add-todo-dialog.component.html',
    styleUrls: ['./add-todo-dialog.component.scss'],
})
export class AddTodoDialogComponent implements OnInit {
    todoForm!: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddTodoDialogComponent>,
        private formBuilder: FormBuilder,
        private store: Store,
    ) {}

    ngOnInit(): void {
        this.inizializeForm();
    }

    inizializeForm(): void {
        this.todoForm = this.formBuilder.group({
            todo: [null, [Validators.required]],
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }

    addTask(): void {
        if (this.todoForm.invalid) return;

        const todoText: string = this.todoForm.value.todo;

        this.store.dispatch(loadAddTodosAction({ todoText }));
        this.todoForm.reset();
        Object.keys(this.todoForm.controls).forEach((key) => {
            this.todoForm.controls[key].setErrors(null);
        });
        this.dialogRef.close();
    }
}
