import React, {lazy, Suspense} from 'react'
import "./About.scss"

const LazyAbout = lazy(() => import(
  '../lazyComponents/lazyAbout'
));

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
          <Suspense fallback = 
          {<div>About Photo loading please wait...</div>}>
            <LazyAbout />
          </Suspense>
        </section>
      </main>
    </>
  )
}

export default About;