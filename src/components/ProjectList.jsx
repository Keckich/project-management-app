export default function ProjectList({ projects, onCreate, onClick }) {
  return (
    <aside className="project-list-container">
      <h2>Your projects</h2>
      <section>
        <button onClick={onCreate}>+ Add Project</button>
        <ul className="project-list">
          {projects.map((project, index) => {
            return <li id={index} key={index} onClick={onClick}>{project.title}</li>;
          })}
        </ul>
      </section>
    </aside>
  );
}
