import { useRef, useState } from "react";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";

import "./Project.css";

export default function Project({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const [task, setTask] = useState('');
  const modalEmptyTaskRef = useRef();
  const modalExistTaskRef = useRef();
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleTask = (e) => {
    setTask(e.target.value);
  }

  const addTask = () => {
    if (!task) {
      modalEmptyTaskRef.current.open();
      return;
    }

    if (tasks.some((item) => item.text === task)) {
      modalExistTaskRef.current.open();
      return;
    }

    onAddTask(task);
    setTask('');
  };

  return (
    <article className="project-page">
      <section className="project-info">
        <div className="project-header">
          <div>
            <h1>{project.title}</h1>
            <span>{formattedDate}</span>
          </div>

          <button
            className="project-action-button"
            onClick={() => onDelete(project)}
          >
            Delete
          </button>
        </div>
        <p>{project.description}</p>
      </section>

      <hr />

      <section className="tasks-section">
        <Modal ref={modalEmptyTaskRef} buttonCaption="Close">
          <h2>Invalid Input</h2>
          <p>Oops... looks like you forgot to input a value.</p>
          <p>Please make sure you provide some value for task name.</p>
        </Modal>
        <Modal ref={modalExistTaskRef} buttonCaption="Close">
          <h2>Invalid Input</h2>
          <p>Oops... looks like such a task already exists.</p>
          <p>Please enter some other task name.</p>
        </Modal>
        <h2>Tasks</h2>
        <input type="text" onChange={handleTask} value={task} />
        <button className="project-action-button" onClick={addTask}>
          Add Task
        </button>
        {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}
        {tasks && <TaskList tasks={tasks} onDelete={onDeleteTask} />}
      </section>
    </article>
  );
}
