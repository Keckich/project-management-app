export default function Project({ project }) {
  return (
    <article>
      <section>
        <h1>{project.title}</h1>
        <span>{project.date}</span>
        <p>{project.description}</p>
      </section>

      <hr />

      <section>
        <h2>Tasks</h2>
        <input type="text" />
        <button>Add Task</button>
        <p>This project does not have any tasks yet.</p>
      </section>
    </article>
  );
}
