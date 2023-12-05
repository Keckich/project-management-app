import { useRef, useState } from "react";
import TaskList from "./TaskList";

export default function Project({ project, onDelete }) {
  const [taskList, setTaskList] = useState([]);
  const handleTaskList = (newTask) => {
    setTaskList((prevList) => {
      return [...prevList, newTask];
    });
  };

  const deleteTask = (index) => {
    setTaskList((prevList) => {
      return prevList.splice(index, 1);
    });
  };
  
  const task = useRef();

  return (
    <article>
      <section>
        <h1>{project.title}</h1>
        <span>{project.date}</span>
        <p>{project.description}</p>
        <button onClick={onDelete}>Delete</button>
      </section>

      <hr />

      <section>
        <h2>Tasks</h2>
        <input ref={task} type="text" />
        <button onClick={() => handleTaskList(task.current.value)}>
          Add Task
        </button>
        {!!taskList && <p>This project does not have any tasks yet.</p>}
        {taskList && <TaskList tasks={taskList} onDelete={deleteTask} />}
      </section>
    </article>
  );
}
