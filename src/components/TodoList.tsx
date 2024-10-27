import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({todos, onCompletedChange, onDelete}: TodoListProps) {
    const todosSorted = todos.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
    return (
        <>
            <div className="space-y-2">
            {
                todosSorted.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete}/>
                )
            )
            }
            </div>
            {todos.length === 0 && <p className="text-center text-gray-400">No todos found. Add a todo to get started.</p>}
        </>
    );
}   