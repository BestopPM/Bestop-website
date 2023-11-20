import React, { useState, useEffect, useRef } from 'react'
import Modal from '../modal/modal'

const initialMaintenanceModalData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
};

const MaintenanceModal = ({ onSumbit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialMaintenanceModalData);

  {/* allows the modal to be fully rendered before focusing on the input */}
  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState(initialNewsletterModalData);
  };
  
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>

    </Modal>
  )
}

export default MaintenanceModal;