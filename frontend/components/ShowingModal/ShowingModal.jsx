import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import emailjs from "emailjs-com";
import "../../stylesheet/styles.css";

const initialShowingModalData = {};

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
      <form ref={form} onSubmit={sendEmail}></form>
      <div class='showing'>
        <input placeholder="Name"></input>
        <input placeholder="Phone"></input>
        <input placeholder="Email"></input>
        <textarea placeholder="Please list convenient times to view property"></textarea>
      </div>
     
      <button type="submit" id="contactButton">
            Submit
          </button>
    </Modal>
  );
};

export default ShowingModal;
