import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import emailjs from "emailjs-com";

const initialMaintenanceModalData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  model: "",
  serial: "",
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
          alert("Thank you - your maintenance request has been received!");
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
        <section className="contact-info">
          <h3>Contact Information</h3>
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
        </section>
        {/* areas of concern */}
        <section className="areas-of-concern">
          <h3>Areas of Concern:</h3>
          <div className="check-list1">
            <div className="left-section">
              <div>
                <input type="checkbox" name="concern1" value="plumbing" />
                <label for="plumbing">Plumbing</label>
              </div>
              <div className="plumbing-subsection">
                <div>
                  <input type="checkbox" name="concern2" value="stoppage" />
                  <label for="stoppage">Stoppage</label>
                </div>
                <div>
                  <input type="checkbox" name="concern3" value="faucets" />
                  <label for="faucets">Faucets</label>
                </div>
                <div>
                  <input type="checkbox" name="concern4" value="Toilet" />
                  <label for="Toilet">Toilet</label>
                </div>
                <div>
                  <input type="checkbox" name="concern5" value="Leaks" />
                  <label for="Leaks">Leaks</label>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div>
                <input type="checkbox" name="concern6" value="heat-and-ac" />
                <label for="heat-and-ac">Heating & Air Conditioning</label>
              </div>
              <div>
                <input type="checkbox" name="concern7" value="electrical" />
                <label for="electrical">Electrical</label>
              </div>
              <div>
                <input type="checkbox" name="concern8" value="other" />
                <label for="other">Other: </label>
                <input type="text" name="other" maxLength="50"></input>
              </div>
            </div>
          </div>
        </section>
        {/* appliance issues */}
        <section className="appliance-issues">
          <h3>Appliance Issues:</h3>
          <div className="check-list2">
            <div className="left-section">
              <div>
                <input type="checkbox" name="issue1" value="refrigerator" />
                <label for="refrigerator">Refrigerator</label>
              </div>
              <div>
                <input type="checkbox" name="issue2" value="stove" />
                <label for="stove">Stove</label>
              </div>
              <div>
                <input type="checkbox" name="issue3" value="dish-washer" />
                <label for="dish-washer">Dish Washer</label>
              </div>
              <div>
                <input type="checkbox" name="issue4" value="garbage-disposal" />
                <label for="garbage-disposal">Garbage Disposal</label>
              </div>
            </div>
            <div className="right-section">
              <div>
                <input type="checkbox" name="issue5" value="range-hood" />
                <label for="range-hood">Range Hood</label>
              </div>
              <div>
                <input type="checkbox" name="issue6" value="washer" />
                <label for="washer">Washer</label>
              </div>
              <div>
                <input type="checkbox" name="issue7" value="dryer" />
                <label for="dryer">Dryer</label>
              </div>
              <div>
                <input type="checkbox" name="issue8" value="other" />
                <label for="other">Other: </label>
                <input type="text" name="other" maxLength="50"></input>
              </div>
            </div>
          </div>
        </section>
        {/* model and serial # */}
        <section className="model-and-serial">
          <h3>Model and Serial Number of Appliance</h3>
          <div className="form-row">
            <label htmlFor="model">Model: </label>
            <input
              ref={focusInputRef}
              type="text"
              id="model"
              name="model"
              maxLength="50"
              value={formState.model}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="serial">Serial Number: </label>
            <input
              ref={focusInputRef}
              type="text"
              id="serial"
              name="serial"
              maxLength="50"
              value={formState.serial}
              onChange={handleInputChange}
            />
          </div>
        </section>
        {/* message */}
        <section className="message">
          <h3>Message</h3>
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
        </section>
        {/* attachments */}
        <section className="attatchments">
          <h3>Attachments</h3>
          <p>Photos: </p>
          <p>Videos: </p>
        </section>
        {/* submit button */}
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default MaintenanceModal;
