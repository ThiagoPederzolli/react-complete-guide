import NewTask from "./NewTask";

function Tasks({ onAddTask, onDeleteTask, tasks }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask} />
            {!tasks.length ? (<p className="mt-4 text-stone-500">No tasks added yet.</p>) : (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => (
                    <li className="flex justify-between my-4" key={task.id}>
                        <span className="text-stone-600">{task.title}</span>
                        <button
                            className="text-stone-700 hover:text-red-500"
                            onClick={() => onDeleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            )}
        </section>
    )
}

export default Tasks;