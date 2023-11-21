import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import emailjs from "emailjs-com";

const initialMaintenanceModalData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

const MaintenanceModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialMaintenanceModalData);
  const form = useRef();

  {
    /* allows the modal to be fully rendered before focusing on the input */
  }
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

  const sendEmail = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState(initialMaintenanceModalData);

    emailjs
      .sendForm(
        "service_ybsczy9",
        "template_e1xmhdf",
        form.current,
        "aKD-Us6N3g93XuFJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you - your message has been received!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <form ref={form} onSubmit={sendEmail}>
        {/* name */}
        <div className="form-row">
          <input
            ref={focusInputRef}
            type="text"
            id="name"
            name="name"
            maxLength="50"
            placeholder="Name*"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* phone */}
        <div className="form-row">
          <input
            ref={focusInputRef}
            type="tel"
            id="phone"
            name="phone"
            pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
            placeholder="Phone Number*"
            value={formState.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* email */}
        <div className="form-row">
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            maxLength="50"
            placeholder="Email*"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* address */}
        <div className="form-row">
          <input
            ref={focusInputRef}
            type="text"
            id="address"
            name="address"
            maxLength="50"
            placeholder="Home Address*"
            value={formState.address}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* message */}
        <div className="form-row">
          <textarea
            ref={focusInputRef}
            type="text"
            id="message"
            name="message"
            maxLength="600"
            placeholder="Please describe the issue in as much detail as possible*"
            value={formState.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        {/* submit button */}
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default MaintenanceModal;
