export default function ProjectList({ projects, onCreate }) {
  return (
    <article className="project-list">
      <h2>Your projects</h2>
      <section>
        <button onClick={onCreate}>+ Add Project</button>
        <ul>
          {projects.map((project) => {
            return <li>{project.title}</li>;
          })}
        </ul>
      </section>
    </article>
  );
}
