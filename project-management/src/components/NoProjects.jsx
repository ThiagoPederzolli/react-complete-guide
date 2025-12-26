import clipboardIcon from "../assets/no-projects.png";
import Button from "./Button";
function NoProjects({ onStartNewProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                className="w-16 h-16 object-contain mx-auto"
                src={clipboardIcon}
                alt="icon of a clipboard with paper and a pen"
            />
            <h2  className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <div className="mt-8">
             <Button onClick={onStartNewProject}>Create New Project</Button>
            </div>
            
        
        </div>
    )
}

export default NoProjects;