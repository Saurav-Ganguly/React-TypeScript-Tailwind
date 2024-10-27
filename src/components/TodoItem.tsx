import { Todo } from "../types/todo";
import {Trash2} from 'lucide-react'
interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}
function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
    return <p className="text-lg">
        <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
            <input type="checkbox" 
            checked={todo.completed} 
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125 accent-red-500"/>
            <span className={`text-xl ${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.title}</span>
            <button className="ml-auto text-red-500" onClick={() => onDelete(todo.id)}><Trash2 size={20} className="hover:text-red-700"/></button>
        </label>
    </p>;
}

export default TodoItem;    