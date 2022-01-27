import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    ) {}

    ngOnInit(): void {
        this.inizializeForm();
    }

    inizializeForm(): void {
        this.todoForm = this.formBuilder.group({
            todo: [null, [Validators.required]],
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
