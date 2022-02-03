import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddTodoDialogModule } from '../shared/modules/add-todo-dialog/add-todo-dialog.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { TodoListModule } from '../shared/modules/todo-list/todo-list.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        MaterialModule,
        TodoListModule,
        AddTodoDialogModule,
    ],
    exports: [DashboardComponent],
})
export class DashboardModule {}
