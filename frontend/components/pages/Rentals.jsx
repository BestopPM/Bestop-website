import React from 'react'
import '../../stylesheet/styles.css';

const Rentals = () => {
  return(
    <>
    <h1 id ='message'>Available Rentals</h1>
    <div id='contact'>
      <div id='box1'>
        <div id='rentalImage'>
          <img src='https://i.imgur.com/HXS98BO_d.webp?maxwidth=760&fidelity=grand'></img>
        </div>
        <p>Rental Price</p>
        <p>Property Adress</p>
        <a>Additional Details</a>
        <button>Request a Showing</button>
      </div>
      <a>Rental Application</a>
    </div>
    </>
  )
}

export default Rentals;