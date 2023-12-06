export default function TaskList({ tasks, onDelete }) {
  const items = tasks.map((task, index) => {
    return (
      <div className="task-container" key={index}>
        <li>{task}</li>
        <button className="project-action-button" onClick={() => onDelete(task)}>Clear</button>
      </div>
    );
  });

  return <ul className="task-list">{items}</ul>;
}
