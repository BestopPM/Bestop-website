import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
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
    <>
      <header className="header">Contact Us</header>

      <main className="contactContent__container">

      <section className="contactContent__container--left">
          <h3 className="title">Contact Information</h3>
          <p>
            <strong>Mailing Address:</strong>
            <br /> 47000 Warm Springs Blvd Ste 274
            <br /> Fremont, CA 94539
          </p>
          <p>
            <strong>Email: </strong>
            ellencanhelp@gmail.com
          </p>
          <p>
            <strong>Phone: </strong>
            (510) 936-8686
          </p>
          <p>
            <strong> Business Hours: </strong>
            <br /> Mon-Fri: 9:00am - 6:00pm
            <br />
            Sat-Sun: Closed
          </p>
          <Link to="/tenant"> Maintenance Request </Link>
        </section>
        
        <section className="contactContent__container--right">
          <h3 className="title">Send Us A Message</h3>
          {/* contact form */}
          <form
            className="contactForm__container"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* name */}
            <input
              type="text"
              name="name"
              className="contactForm__input"
              maxLength="50"
              placeholder="Name*"
              required
            />
            {/* phone */}
            <input
              type="tel"
              name="phone"
              className="contactForm__input"
              pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
              placeholder="Phone Number*"
              required
            />
            {/* email */}
            <input
              type="email"
              name="email"
              className="contactForm__input"
              maxLength="50"
              placeholder="Email*"
              required
            />
            {/* message */}
            <textarea
              type="text"
              name="message"
              className="contactForm__message"
              placeholder="Message*"
              maxLength="500"
              required
            ></textarea>
            <button type="submit" className="contactForm__button">
              Submit
            </button>
          </form>
        </section>

      </main>
    </>
  );
};

export default Contact;
