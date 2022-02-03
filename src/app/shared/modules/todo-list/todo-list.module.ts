import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
import { TodoListComponent } from './components/todo-list.component';
import { TodoEffect } from './store/effects/todo.effect';
import { reducer } from './store/todoReducers';

@NgModule({
    declarations: [TodoListComponent],
    imports: [
        CommonModule,
        MaterialModule,
        StoreModule.forFeature('todo', reducer),
        EffectsModule.forFeature([TodoEffect]),
    ],
    exports: [TodoListComponent],
})
export class TodoListModule {}
