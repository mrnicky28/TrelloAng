import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';

@NgModule({
    declarations: [AddTodoDialogComponent],
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
    exports: [AddTodoDialogComponent],
})
export class AddTodoDialogModule {}
