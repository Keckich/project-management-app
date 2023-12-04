import { useRef } from "react";

export default function CreateProject({ onSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
    <>
      <section className="action-buttons">
        <button>Cancel</button>
        <button
          onClick={() =>
            onSave({
              title: title.current.value,
              description: description.current.value,
              date: date.current.value,
            })
          }
        >
          Save
        </button>
      </section>
      <section className="create-container">
        <div className="form-input">
          <label>Title</label>
          <input ref={title} className="input-data" type="text" />
        </div>
        <div className="form-input">
          <label>Description</label>
          <textarea ref={description} className="input-data"></textarea>
        </div>
        <div className="form-input">
          <label>Due Date</label>
          <input ref={date} className="input-data" type="date" />
        </div>
      </section>
    </>
  );
}
