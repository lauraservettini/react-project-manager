import NewTask from "./NewTask";

export default function Tasks({addTask, deleteTask, projectId, tasks}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
                Task
            </h2>
            <NewTask addTask={addTask} id={projectId}/>
            { tasks.length === 0 && (<p className="text-stone-800 my-4">This project does not have hany tasks yet!</p>) }
            { tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task)=> {
                    if (task.projectId === projectId){
                        return(
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button className="px-2 py-1 rounded-sm text-stone-950 bg-stone-300 hover:text-red-50 hover:bg-red-600"
                            onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>);
                        }
                    } 
                )} 
            </ul>)}
        </section>
    )
}