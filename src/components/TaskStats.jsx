function TaskStats({ tasks }) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    return (
        <section>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </section>
    );
}

export default TaskStats;