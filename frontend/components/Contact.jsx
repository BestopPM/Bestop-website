import React from 'react';
import '../stylesheet/styles.css';

const Contact = () => {
    return (
        <>
        {/* <Nav /> */}
        <p>Send Us A Message</p>
        <div id='box1'>
            <form>
                <p>Name</p>
                <input></input>
                <p>Phone</p>
                <input></input>
                <p>Email</p>
                <input></input>
                <p>Message</p>
                <input></input>
                <button type='submit'>Submit</button>
            </form>
            <div id='box2'>
                <p>Mailing Address:</p>
                <p>47000 Warm Springs Blvd Ste 274 Fremont, CA 94539</p>
                <p>Email:</p>
                <p>Phone:</p>
                <span>(510)936-8686</span>
                <p>Business Hours:</p>
                <p>Mon-Fri   9:00am - 6:00pm</p>
                <p>Sat-Sun   Closed</p>
                <a href='/tenant'>Maintenance Request</a>
            </div>
        </div>
        </>
    )
}

export default Contact