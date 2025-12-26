import { useState } from "react";
import SideBar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import AddProject from "./components/AddProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projectList: [],
    tasks: [],
  });

  function handleAddTask(taskData) {
    setProjects((prevState) => {
      const updatedTasks = [...prevState.tasks, {
        id: Math.random().toString(),
        title: taskData.title,
        completed: false,
        projectId: prevState.selectedProject.id,
      }];
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjects((prevState) => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== taskId);
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleStartNewProject() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjects((prevState) => {
      const newProject = {
        id: Math.random().toString(),
        title: projectData.title,
        description: projectData.description,
        dueDate: projectData.dueDate
      }
      return {
        ...prevState,
        selectedProject: undefined,
        projectList: [...prevState.projectList, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: prevState.projectList.find(project => project.id === projectId),
    }));
  }

  function handleDeleteProject(projectId) {
    setProjects((prevState) => {
      const updatedProjectList = prevState.projectList.filter(project => project.id !== projectId);
      return {
        ...prevState,
        projectList: updatedProjectList,
        selectedProject: undefined,
      };
    });
  }

  let content;
  if (projects.selectedProject === undefined) {
    content = <NoProjects onStartNewProject={handleStartNewProject} />;
  } else if (projects.selectedProject === null) {
    content = <AddProject onCancel={handleCancelAddProject} onAddProject={handleAddProject} />;
  } else {
    content = <SelectedProject
      onDeleteProject={handleDeleteProject}
      project={projects.selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}
      />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar
      projectsList={projects.projectList}
      onStartNewProject={handleStartNewProject}
      onSelectProject={handleSelectProject}
      selectedProjectId={projects.selectedProject?.id}
    />
    {content}
    </main>
  );
}

export default App;
