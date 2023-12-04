import React, { useState, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "../modal/modal";
import emailjs from "emailjs-com";
import "./ShowingModal.scss";

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
  const navigate = useNavigate();

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
        "template_o0qg5a4",
        form.current,
        "aKD-Us6N3g93XuFJ8"
      )
      .then(
        (result) => {
          navigate("/submitted");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <h3 className="title"> Request a Showing </h3>
      <form ref={form} onSubmit={sendEmail} className="showingForm_container">
        <input
          placeholder="Name*"
          ref={focusInputRef}
          type="text"
          className="showingForm__input"
          name="name"
          maxLength="50"
          value={formState.name}
          onChange={handleInputChange}
          required
        ></input>
        <input
          placeholder="Phone Number*"
          type="tel"
          className="showingForm__input"
          name="phone"
          pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
          value={formState.phone}
          onChange={handleInputChange}
          required
        ></input>
        <input
          placeholder="Email*"
          type="email"
          className="showingForm__input"
          name="email"
          maxLength="50"
          value={formState.email}
          onChange={handleInputChange}
          required
        ></input>
        <textarea
          placeholder="Please list convenient times to view the property*"
          type="text"
          className="showingForm__message"
          name="message"
          maxLength="500"
          value={formState.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className="showingForm__button">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ShowingModal;
