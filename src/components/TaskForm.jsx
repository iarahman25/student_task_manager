import { useState } from "react";

function TaskForm({onAddTask}) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (trimmedTitle === "") {
            setError("Please enter a task title.");
            return;
        }

        onAddTask(trimmedTitle);
        setTitle("");
        setError("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Enter task title"
            value={title}
            onChange={(event) => {
                setTitle(event.target.value);
                setError("");
            }}
            />

            <button type="submit">Add Task</button>

            {error && <p role="alert">{error}</p>}
        </form>
    );
}

export default TaskForm;