import React from 'react';
import '../stylesheet/styles.css';

const Contact = () => {
    return (
        <>
        {/* <Nav /> */}
        <p>Send Us A Message</p>
        <div>
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
            <div>
                <p>Mailing Address:</p>
                <p>47000 Warm Springs Blvd Ste 274 Fremont, CA 94539</p>
            </div>
        </div>
        </>
    )
}

export default Contact