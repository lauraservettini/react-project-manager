import {useState} from 'react';

import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [ projectsState, setProjectsState] = useState({
    selectedProjectId : undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:null,

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

  let content;

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
      />
      {content}
    </main>
  );
}

export default App;
