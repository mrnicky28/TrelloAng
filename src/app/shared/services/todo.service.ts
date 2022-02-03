import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor() {}

    getTodos() {
        let todos = JSON.parse(localStorage.getItem('todos')!);
        todos === null ? (todos = []) : todos;
        return of(todos);
    }

    addTodo(addItem: string) {
        const todosStorage = window.localStorage.getItem('todos');
        let todos = [];
        if (todosStorage !== null) {
            todos = JSON.parse(todosStorage);
        }
        const newTodo: Todo = {
            completed: false,
            description: addItem,
            id: new Date().getTime(),
        };

        todos.push(newTodo);
        return of(window.localStorage.setItem('todos', JSON.stringify(todos)));
    }

    deleteTodo(deleteItem: any) {
        const todos = JSON.parse(window.localStorage.getItem('todos')!);
        const saved = todos.filter((item: any) => {
            return item.id !== deleteItem.id;
        });
        return of(window.localStorage.setItem('todos', JSON.stringify(saved)));
    }
}
