import React, {useState, useEffect, useRef } from 'react'
import "./Modal.scss"

const Modal = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  {/* close modal by pressing 'escape' key */}
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      {hasCloseBtn && (
        <button className="modal__closeBtn" onClick={handleCloseModal}>
          X
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;