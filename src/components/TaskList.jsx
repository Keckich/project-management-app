export default function TaskList({ tasks, onDelete }) {
  const items = tasks.map((task, index) => {
    return (
      <div key={index}>
        <li>{task}</li>
        <button onClick={() => onDelete(index)}>Clear</button>
      </div>
    );
  });

  return <ul>{items}</ul>;
}
