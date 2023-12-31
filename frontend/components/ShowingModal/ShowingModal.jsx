import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import PhoneNumberInput from "../../InputMasks/PhoneNumberInput";
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
        "service_hxuywdr",
        "template_vl9raxz",
        form.current,
        "SGU4cgWPtbLorM_Sa"
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
      <h1 className="title" style={{ textAlign: "center" }}>
        {" "}
        Request Showing{" "}
      </h1>
      <form ref={form} onSubmit={sendEmail} className="showingForm_container">
        <section className="showing__section">
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
          <PhoneNumberInput className="contact__input" value={formState.phone} onChange={handleInputChange}/>
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
        </section>
        <button type="submit" className="showingForm__button">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ShowingModal;
