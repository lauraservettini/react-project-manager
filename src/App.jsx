import {useState} from 'react';

import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from './components/SelectedProject';

function App() {
  const [ projectsState, setProjectsState] = useState({
    selectedProjectId : undefined,
    projects: [],
    tasks: []
    
  });

  function addTask(text, id) {
    setProjectsState((prevState) => {

      const newTask = {
        text: text,
        projectId: id,
        id: Math.random()
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]

      };
    });
  }

  function deleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId)
      };
    });
  }
  

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:null,

      };
    });
  }

  function handleDeleteProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== id),
        selectedProjectId:undefined,
      };
    });
  }

  function handleCancel(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:undefined,

      };
    });
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,

      };
    });
  }
  function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]

      };
    });
  }
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
 
  let content = <SelectedProject project={selectedProject} tasks={projectsState.tasks} onDelete={handleDeleteProject} addTask={addTask} deleteTask={deleteTask} />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancel} onSave={handleAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onAddProject={handleStartAddProject} />
  } 

  return (
    <main className="h-screen my-8 flex gap-8" >
      <Sidebar 
      onAddProject={handleStartAddProject}
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
