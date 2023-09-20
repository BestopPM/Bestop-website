import React from 'react';
import '../stylesheet/styles.css';

const Contact = () => {
    return (
        <>
        {/* <Nav /> */}
        <p>Send Us A Message</p>
        <div id='contact'>
            <form id='box1'>
                <p>Name*</p>
                <input type='text' class='contactInput' required></input>
                <p>Phone*</p>
                <input type='tel'  class='contactInput' required></input>
                <p>Email*</p>
                <input type='email'  class='contactInput' required></input>
                <p>Message*</p>
                <input type='text' required id='contactMessage'></input>
                <button type='submit' id='contactButton'>Submit</button>
            </form>
            <div id='box2'>
                <p>Mailing Address:</p>
                <p>47000 Warm Springs Blvd Ste 274 Fremont, CA 94539</p>
                <p>Email:</p>
                <p>Phone:</p>
                <p>(510) 936-8686</p>
                <p>Business Hours:</p>
                <p>Mon-Fri:   9:00am - 6:00pm</p>
                <p>Sat-Sun:   Closed</p>
                <a href='/tenant'>Maintenance Request</a>
            </div>
        </div>
        </>
    )
}

export default Contact