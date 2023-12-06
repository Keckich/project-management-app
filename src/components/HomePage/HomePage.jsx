import './HomePage.css';

export default function HomePage({ noProjectImg, openCreatingProjectPage }) {
  return (
    <div className="no-project-info">
      <img className="no-project-img" src={noProjectImg} />
      <h2>No Project Selected</h2>
      <span>Select a project or get started with a new one</span>
      <button
        className="project-action-button"
        onClick={openCreatingProjectPage}
      >
        Create new project
      </button>
    </div>
  );
}
