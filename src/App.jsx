import { useState } from "react";

import CreateProject from "./components/CreateProject/CreateProject";
import ProjectList from "./components/ProjectList/ProjectList";
import Project from "./components/Project/Project";

import noProjectImg from "./assets/no-projects.png";
import HomePage from "./components/HomePage/HomePage";

var defaultProjectList = [
  {
    title: "project1",
    description: "desc1",
    date: "2023-12-15",
    id: Math.random(),
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: defaultProjectList,
    tasks: [],
    selectedProject: undefined,
  });

  const openCreatingPage = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const openHomePage = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };

  const addNewProject = (project) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProject: undefined,
      };
    });
  };

  const deleteProject = (project) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((item) => item != project),
      };
    });
    openHomePage();
  };

  const handleAddTask = (task) => {
    setProjectsState((prevState) => {
      console.log(task);
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProject.id,
        id: taskId,
      };
      
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (task) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((item) => item.id != task.id),
      };
    });
  };

  let content;

  if (projectsState.selectedProject === undefined) {
    content = (
      <HomePage
        noProjectImg={noProjectImg}
        openCreatingProjectPage={openCreatingPage}
      />
    );
  } else if (projectsState.selectedProject == null) {
    content = <CreateProject onSave={addNewProject} onCancel={openHomePage} />;
  } else {
    content = (
      <Project
        project={projectsState.selectedProject}
        onDelete={deleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks.filter(task => task.projectId == projectsState.selectedProject.id)}
      />
    );
  }

  const openProjectPage = (e) => {
    setProjectsState((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        selectedProject: prevState.projects[+e.target.id],
      };
    });
  };

  return (
    <main>
      <ProjectList
        projects={projectsState.projects}
        onCreate={openCreatingPage}
        onClick={openProjectPage}
      />
      <article
        className={`${
          projectsState.selectedProject === undefined ? "no-project-page" : ""
        } project-section`}
      >
        {content}
      </article>
    </main>
  );
}

export default App;
