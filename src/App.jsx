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
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: defaultProjectList,
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

  const addNewProject = (newProject) => {
    setProjectsState((prevState) => {
      return {
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

  let content;

  if (projectsState.selectedProject === undefined) {
    content = (
      <HomePage
        noProjectImg={noProjectImg}
        openCreatingProjectPage={openCreatingPage}
      />
    );
  } else if (projectsState.selectedProject == null) {
    content = (
      <CreateProject onSave={addNewProject} onCancel={openHomePage} />
    );
  } else {
    content = (
      <Project
        project={projectsState.selectedProject}
        onDelete={deleteProject}
      />
    );
  }

  const openProjectPage = (e) => {
    setProjectsState((prevState) => {
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
