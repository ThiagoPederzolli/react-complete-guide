import Button from "./Button";
function SideBar({ onStartNewProject, projectsList, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
           <div>
             <Button
                onClick={onStartNewProject}
             >+ Add Project</Button>
           </div>

            <ul className="mt-8">
                {projectsList && projectsList.map((project) => {
                    const ccsClasses = `block w-full text-left px-4 py-2 mb-2 rounded-md hover:bg-stone-700 hover:text-stone-100 ${selectedProjectId === project.id ? 'bg-stone-800 text-stone-200' : 'text-stone-400'}`;
                    return (
                    <li
                        key={project.id}
                    >
                        <button
                            className={ccsClasses}
                            onClick={() => onSelectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                )
                })}
            </ul>

        </aside>
    )
}

export default SideBar;