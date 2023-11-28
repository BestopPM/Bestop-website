import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import emailjs from "emailjs-com";
import "../../stylesheet/styles.css";

const initialShowingModalData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ShowingModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialShowingModalData);
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
    setFormState(initialShowingModalData);

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
          alert("Thank you - your showing request has been received!");
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
        <div className="showing">
          <h3> Request a Showing </h3>
          <input
            placeholder="Name*"
            ref={focusInputRef}
            type="text"
            id="name"
            name="name"
            maxLength="50"
            value={formState.name}
            onChange={handleInputChange}
            required
          ></input>
          <input
            placeholder="Phone Number*"
            type="tel"
            id="phone"
            name="phone"
            pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
            value={formState.phone}
            onChange={handleInputChange}
            required
          ></input>
          <input
            placeholder="Email*"
            type="email"
            id="email"
            name="email"
            maxLength="50"
            value={formState.email}
            onChange={handleInputChange}
            required
          ></input>
          <textarea
            placeholder="Please list convenient times to view the property*"
            type="text"
            id="textArea"
            name="message"
            maxLength="500"
            value={formState.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" id="contactButton">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ShowingModal;
