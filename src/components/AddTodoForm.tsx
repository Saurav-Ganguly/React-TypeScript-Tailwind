import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!input.trim()) return;
        onSubmit(input);
        setInput("");
    }

    return (
    <form className="flex" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add a new todo" 
        className="rounded-s-md grow border border-gray-400 p-2" 
        value={input}
        onChange={e => setInput(e.target.value)}/>
        <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white p-2 hover:bg-slate-800">Add</button>
    </form>
    );
}
