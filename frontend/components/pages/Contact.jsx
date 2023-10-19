import React, {useRef} from 'react';
import '../../stylesheet/styles.css';
// import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const sendForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <>
        {/* <Nav /> */}
        <div id='message'>
            <p>Send Us A Message</p>
        </div>
        <div id='contact'>
            <form id='box1' ref={form} onSubmit={sendForm}>
                <p>Name*</p>
                <input type='text' class='contactInput' required></input>
                <p>Phone*</p>
                <input type='tel'  class='contactInput' required></input>
                <p>Email*</p>
                <input type='email'  class='contactInput' required></input>
                <p>Message*</p>
                <textarea type='text' required id='contactMessage'></textarea>
                <button type='submit' id='contactButton' value='Send'>Submit</button>
            </form>
            <div id='box2'>
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
                <p>Mon-Fri:   9:00am - 6:00pm</p>
                <p>Sat-Sun:   Closed</p>
                </section>
                <a href='/tenant' id='maintenanceButton'>Maintenance Request</a>
            </div>
        </div>
        </>
    )
}

export default Contact