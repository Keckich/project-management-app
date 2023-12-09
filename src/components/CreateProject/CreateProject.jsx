import { useRef } from "react";

import "./CreateProject.css";
import Modal from "../Modal/Modal";

export default function CreateProject({ onSave, onCancel }) {
  const EMPTY_VALUE = "";

  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle === EMPTY_VALUE ||
      enteredDescription === EMPTY_VALUE ||
      enteredDate === EMPTY_VALUE
    ) {
      modalRef.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to input a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <section className="action-buttons">
        <button onClick={onCancel} className="project-action-button">
          Cancel
        </button>
        <button
          className="dark-button project-action-button"
          onClick={handleSave}
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
