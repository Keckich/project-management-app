import './TaskList.css';

export default function TaskList({ tasks, onDelete }) {
  const items = tasks.map((task) => {
    return (
      <div className="task-container" key={task.id}>
        <li>{task.text}</li>
        <button className="project-action-button" onClick={() => onDelete(task)}>Clear</button>
      </div>
    );
  });

  return <ul className="task-list">{items}</ul>;
}
