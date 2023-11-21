import React, { useRef } from "react";
import "../../stylesheet/styles.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ybsczy9",
        "template_o0qg5a4",
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
    <>
      <div id="message">
        <h1>Send Us A Message</h1>
      </div>
      <div id="contact">
        {/* contact form */}
        <form id="box1" ref={form} onSubmit={sendEmail}>
          {/* name */}
          <input
            type="text"
            name="name"
            className="contactInput"
            maxLength="50"
            placeholder="Name*"
            required
          />
          {/* phone */}
          <input
            type="tel"
            name="phone"
            className="contactInput"
            pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
            placeholder="Phone Number*"
            required
          />
          {/* email */}
          <input
            type="email"
            name="email"
            className="contactInput"
            maxLength="50"
            placeholder="Email*"
            required
          />
          {/* message */}
          <textarea
            type="text"
            name="message"
            className="message"
            placeholder="Message*"
            maxLength="500"
            required
          ></textarea>
          <button type="submit" id="contactButton">
            Submit
          </button>
        </form>
        <div id="box2">
          <section>
            <p>Mailing Address:</p>
            <p>47000 Warm Springs Blvd Ste 274 Fremont, CA 94539</p>
          </section>
          <section>
            <p>Email:</p>
            <p>TBD</p>
          </section>
          <section>
            <p>Phone:</p>
            <p>(510) 936-8686</p>
          </section>
          <section>
            <p>Business Hours:</p>
            <p>Mon-Fri: 9:00am - 6:00pm</p>
            <p>Sat-Sun: Closed</p>
          </section>
          <Link to="/tenant"> Maintenance Request </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
