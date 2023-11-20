import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <div>
        <button onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
