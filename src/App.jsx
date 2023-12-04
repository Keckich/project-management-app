import { useState } from "react";

import CreateProject from "./components/CreateProject";
import ProjectList from "./components/ProjectList";

var defaultProjectList = [];

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState();
  const [projectList, setProjectList] = useState(defaultProjectList);

  const openCreatingProjectPage = () => {
    setIsCreatingProject(true);
  };

  const closeCreatingProjectPage = () => {
    setIsCreatingProject(false);
  };

  const handleProjectList = (newProject) => {
    setProjectList((prevList) => {
      console.log([...prevList, newProject]);
      return [...prevList, newProject];
    });
    closeCreatingProjectPage();
  };

  return (
    <main>
      <ProjectList projects={projectList} onCreate={openCreatingProjectPage} />
      <article className="project-section">
        {isCreatingProject && <CreateProject onSave={handleProjectList} />}
        {!isCreatingProject && (
          <button onClick={openCreatingProjectPage}>Create new project</button>
        )}
      </article>
    </main>
  );
}

export default App;
