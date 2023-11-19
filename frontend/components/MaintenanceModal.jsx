import React from "react";
import SubmitButton from "./SubmitButton";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <div>
        <button onClick={() => closeModal(false)}>Cancel</button>
        <SubmitButton />
      </div>
    </div>
  );
};

export default Modal;
