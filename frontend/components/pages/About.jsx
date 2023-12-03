import React from 'react'
import aboutPhoto from "../assets/aboutPhoto.webp";
import "./About.scss"

const About = () => {
  return(
    <>
      <header className="header">About Us</header>
      
      <main className="aboutContent__container">
        <section className="aboutContent__container--top">
          <h3 className="title">Our Mission</h3>
          <p>
          BESTOP PROPERTY MANAGEMENT provides leasing and property management services to investment property owners.  We specialize in residential properties and offer a high-touch, high-quality approach to all our services.
          </p>
        </section>
        <section className="aboutContent__container--bottom">
          <img src={aboutPhoto} alt="housesPhoto" className="about__img"/>
        </section>
      </main>
    </>
  )
}

export default About;