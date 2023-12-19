import {useRef} from 'react';

import Input from "./Input";
import Modal from "./Modal"


export default function NewProject({onSave, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        // salva i dati dai valori degli input
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        const newProject = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        };

        onSave(newProject);
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Close" >
                <h2  className="text-xl font-bold text-stone-900 mt-4 my-4">Invalid input</h2>
                <p className="text-stone-700 mb-4">Please provide to enter a valid value on input fields!</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 mt-4">
                    <li>
                        <button 
                        className="px-6 py-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                        onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={handleSave} 
                        className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu> 
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}