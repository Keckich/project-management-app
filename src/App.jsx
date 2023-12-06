import { useRef, useState } from "react";

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
  const [isCreatingProject, setIsCreatingProject] = useState();
  const [isProjectPage, setIsProjectPage] = useState();
  const [projectList, setProjectList] = useState(defaultProjectList);
  const [project, setProject] = useState();

  const openCreatingProjectPage = () => {
    setIsCreatingProject(true);
    closeProjectPage();
  };

  const closeCreatingProjectPage = () => {
    setIsCreatingProject(false);
  };

  const openProjectPage = (e) => {
    setProject(projectList[+e.target.id]);
    setIsProjectPage(true);
    closeCreatingProjectPage();
  };

  const closeProjectPage = () => {
    setIsProjectPage(false);
  };

  const handleProjectList = (newProject) => {
    setProjectList((prevList) => {
      console.log([...prevList, newProject]);
      return [...prevList, newProject];
    });
    closeCreatingProjectPage();
  };

  const deleteProject = (project) => {
    setProjectList((prevList) => {
      return prevList.filter((item) => item != project);
    });
    closeProjectPage();
  };

  return (
    <main>
      <ProjectList
        projects={projectList}
        onCreate={openCreatingProjectPage}
        onClick={openProjectPage}
      />
      <article
        className={`${
          !isCreatingProject && !isProjectPage ? "no-project-page" : ""
        } project-section`}
      >
        {isProjectPage && (
          <Project project={project} onDelete={deleteProject} />
        )}
        {isCreatingProject && (
          <CreateProject
            onSave={handleProjectList}
            onCancel={closeCreatingProjectPage}
          />
        )}
        {!isCreatingProject && !isProjectPage && (
          <HomePage
            noProjectImg={noProjectImg}
            openCreatingProjectPage={openCreatingProjectPage}
          />
        )}
      </article>
    </main>
  );
}

export default App;
