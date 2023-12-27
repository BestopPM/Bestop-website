import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom';
import "./MaintenanceModal.scss"

const initialMaintenanceModalData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  concern: [],
  otherConcerns: "",
  issue: [],
  otherIssues: "",
  model: "",
  brand: "",
  serial: "",
  message: "",
};

const MaintenanceModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialMaintenanceModalData);
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
          navigate("/submitted")
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
        <form ref={form} onSubmit={sendEmail} className="maintenanceForm__container">
          <h1 className="title" style={{textAlign: "center"}}>Maintenance Request</h1>
          <section className="maintenance__section">
            <h3 className="title">Contact Information</h3>
            {/* name */}
            <input
              ref={focusInputRef}
              type="text"
              className="contact__input"
              name="name"
              maxLength="50"
              placeholder="Name*"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
            {/* phone */}
            <input
              type="tel"
              className="contact__input"
              name="phone"
              pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
              placeholder="Phone Number*"
              value={formState.phone}
              onChange={handleInputChange}
              required
            />
            {/* email */}
            <input
              type="email"
              className="contact__input"
              name="email"
              maxLength="50"
              placeholder="Email*"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
            {/* address */}
            <input
              type="text"
              className="contact__input"
              name="address"
              maxLength="50"
              placeholder="Home Address*"
              value={formState.address}
              onChange={handleInputChange}
              required
            />
          </section>
          {/* areas of concern */}
          <section className="maintenance__section">
            <h3 className="title">Areas of Concern:</h3>
            <div className="concerns__container">
              <div className="concerns__container--left">
                <div>
                  <input type="checkbox" name="concern" value="plumbing" />
                  <label htmlFor="plumbing" className="plumbing">Plumbing</label>
                </div>
                <div className="plumbing__subsection">
                  <div>
                    <input type="checkbox" name="concern" value="stoppage" />
                    <label htmlFor="stoppage">Stoppage</label>
                  </div>
                  <div>
                    <input type="checkbox" name="concern" value="faucets" />
                    <label htmlFor="faucets">Faucets</label>
                  </div>
                  <div>
                    <input type="checkbox" name="concern" value="toilet" />
                    <label htmlFor="Toilet">Toilet</label>
                  </div>
                  <div>
                    <input type="checkbox" name="concern" value="leaks" />
                    <label htmlFor="Leaks">Leaks</label>
                  </div>
                </div>
              </div>
              <div className="concerns__container--right">
                <div>
                  <input type="checkbox" name="concern" value="heat-and-ac" />
                  <label htmlFor="heat-and-ac">Heating & Air Conditioning</label>
                </div>
                <div>
                  <input type="checkbox" name="concern" value="electrical" />
                  <label htmlFor="electrical">Electrical</label>
                </div>
                <div>
                  <input type="checkbox" name="concern" value="other" />
                  <label htmlFor="other">Other: </label>
                  <input
                    type="text"
                    className="other__input"
                    name="otherConcerns"
                    maxLength="50"
                    value={formState.otherConcerns}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
            </div>
          </section>
          {/* appliance issues */}
          <section className="maintenance__section">
            <h3 className="title">Appliance Issues:</h3>
            <div className="issues__container">
              <div className="issues__container--left">
                <div>
                  <input type="checkbox" name="issue" value="refrigerator" />
                  <label htmlFor="refrigerator">Refrigerator</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="stove" />
                  <label htmlFor="stove">Stove</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="dish-washer" />
                  <label htmlFor="dish-washer">Dish Washer</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="garbage-disposal" />
                  <label htmlFor="garbage-disposal">Garbage Disposal</label>
                </div>
              </div>
              <div className="issues__container--right">
                <div>
                  <input type="checkbox" name="issue" value="range-hood" />
                  <label htmlFor="range-hood">Range Hood</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="washer" />
                  <label htmlFor="washer">Washer</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="dryer" />
                  <label htmlFor="dryer">Dryer</label>
                </div>
                <div>
                  <input type="checkbox" name="issue" value="other" />
                  <label htmlFor="other">Other: </label>
                  <input
                    type="text"
                    className="other__input"
                    name="otherIssues"
                    maxLength="50"
                    value={formState.otherIssues}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
            </div>
          </section>
          {/* model and serial # */}
          <section className="maintenance__section">
            <h3 className="title">Appliance Details</h3>
            <div>
              <label htmlFor="brand">Brand: </label>
              <input
                type="text"
                className="appliance__input"
                style={{marginTop: "0.375rem", marginBottom: "0.65rem"}}
                name="brand"
                maxLength="50"
                value={formState.brand}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="model">Model: </label>
              <input
                type="text"
                className="appliance__input"
                style={{marginBottom: "0.65rem"}}
                name="model"
                maxLength="50"
                value={formState.model}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="serial">Serial #: </label>
              <input
                type="text"
                className="appliance__input"
                style={{marginBottom: "1rem"}}
                name="serial"
                maxLength="50"
                value={formState.serial}
                onChange={handleInputChange}
              />
            </div>
          </section>
          {/* message */}
          <section>
            <h3 className="title">Message</h3>
            <textarea
              type="text"
              name="message"
              className="maintenanceForm__message"
              maxLength="700"
              placeholder="Please describe the issue in as much detail as possible*"
              value={formState.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </section>
          {/* submit button */}
          <button type="submit" className="maintenanceForm__button">Submit</button>
        </form>
    </Modal>
  );
};

export default MaintenanceModal;
