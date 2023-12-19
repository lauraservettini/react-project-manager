import { useState } from "react";

export default function NewTask({addTask, id}) {
    const [enteredTask, setEnteredTask] = useState('');
    const [invalidValue, setInvalidValue] = useState(false);

    function handleChange(event) {
        setEnteredTask(event.target.value);
        setInvalidValue(false);
    }

    function handleClick(){
        if(enteredTask !== ''){
            addTask(enteredTask, id);
            setEnteredTask('');
        }
        else {
            setInvalidValue(true);
        }
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <input onChange={handleChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
                <button onClick={handleClick} className="px-2 py-1 rounded-sm text-stone-950 bg-stone-300 hover:text-stone-50 hover:bg-stone-600">Add Task</button>
            </div>
            {invalidValue && <p className="text-red-700">Insert a valid value!</p>}
        </>

    );
}