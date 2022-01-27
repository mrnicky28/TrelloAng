import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/todo.inteerface';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor() {}

    getTodos() {
        let todos = JSON.parse(localStorage.getItem('todos')!);
        return todos === null ? (todos = []) : todos;
    }

    addTodo(addItem: string) {
        const todosStorage = window.localStorage.getItem('todos');
        let todos = [];
        if (todosStorage !== null) {
            todos = JSON.parse(todosStorage);
        }
        const newTodo: Todo = {
            done: false,
            description: addItem,
            id: todos.lenght + 1,
        };

        todos.push(newTodo);
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
}
