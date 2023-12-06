import { useRef, useState } from "react";
import TaskList from "./TaskList";

export default function Project({ project, onDelete }) {
  const [taskList, setTaskList] = useState([]);
  const handleTaskList = (newTask) => {
    setTaskList((prevList) => {
      return [...prevList, newTask];
    });
  };
  
  const deleteTask = (task) => {
    setTaskList((prevList) => {
      return prevList.filter(item => item != task);
    });
  };

  const task = useRef();

  return (
    <article className="project-page">
      <section className="project-info">
        <div className="project-header">
          <div>
            <h1>{project.title}</h1>
            <span>{project.date}</span>
          </div>

          <button className="project-action-button" onClick={() => onDelete(project)}>
            Delete
          </button>
        </div>
        <p>{project.description}</p>
      </section>

      <hr />

      <section className="tasks-section">
        <h2>Tasks</h2>
        <input ref={task} type="text" />
        <button
          className="project-action-button"
          onClick={() => handleTaskList(task.current.value)}
        >
          Add Task
        </button>
        {!!taskList && <p>This project does not have any tasks yet.</p>}
        {taskList && <TaskList tasks={taskList} onDelete={deleteTask} />}
      </section>
    </article>
  );
}
