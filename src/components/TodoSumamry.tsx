import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return <div>
        <p className="text-sm font-medium text-center">{completedTodos.length}/{todos.length} todos completed</p>
        {completedTodos.length > 0 && (
            <button className=" text-red-500 hover:underline text-sm font-medium block mx-auto" onClick={deleteAllCompleted}>Delete all completed todos</button>
        )
        }
    </div>;
}