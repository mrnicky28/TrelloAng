import { AllTodosType } from './allTodos.type';

export interface TodoStateInterface {
    data: AllTodosType[] | null;
    error: string | null;
    isLoading: boolean;
}
