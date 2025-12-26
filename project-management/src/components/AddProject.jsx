import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function AddProject({ onAddProject, onCancel }) {
    const title = useRef(null);
    const description = useRef(null);
    const dueDate = useRef(null);
    const modalRef = useRef(null);

    function handleSubmit() {
        const projectTitle = title.current.value;
        const projectDescription = description.current.value;
        const projectDueDate = dueDate.current.value;

        if (!projectTitle.trim().length || !projectDescription.trim().length || !projectDueDate.trim().length) {
            modalRef.current.open();
            return;
        }

        onAddProject({
            title: projectTitle,
            description: projectDescription,
            dueDate: projectDueDate
        });
    }


    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please make sure all fields are filled in.</p>
            </Modal>
            <div
                className="w-[35rem] mt-16"
            >
                <menu
                    className="flex items-center justify-end gap-4 my-4"
                >
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" id="title" type="text" placeholder="Enter project title" />
                    <Input ref={description} label="Description" id="description" isTextArea placeholder="Enter project description" />
                    <Input ref={dueDate} label="Due Date" id="dueDate" type="date" />
                </div>
            </div>
        </>
    )
}

export default AddProject;