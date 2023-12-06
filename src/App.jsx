import { useRef, useState } from "react";

import CreateProject from "./components/CreateProject";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";

import noProjectImg from "./assets/no-projects.png";

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

  let selectedProject = useRef();

  const openCreatingProjectPage = () => {
    setIsCreatingProject(true);
    closeProjectPage();
  };

  const closeCreatingProjectPage = () => {
    setIsCreatingProject(false);
  };

  const openProjectPage = (e) => {
    setIsProjectPage(true);
    selectedProject.current = projectList[+e.target.id];
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

  const deleteProject = (index) => {
    setProjectList((prevList) => {
      return prevList.splice(index, 1);
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
          <Project project={selectedProject.current} onDelete={deleteProject} />
        )}
        {isCreatingProject && <CreateProject onSave={handleProjectList} onCancel={closeCreatingProjectPage} />}
        {!isCreatingProject && !isProjectPage && (
          <div className="no-project-info">
            <img className="no-project-img" src={noProjectImg} />
            <h2>No Project Selected</h2>
            <span>Select a project or get started with a new one</span>
            <button
              className="project-action-button"
              onClick={openCreatingProjectPage}
            >
              Create new project
            </button>
          </div>
        )}
      </article>
    </main>
  );
}

export default App;
