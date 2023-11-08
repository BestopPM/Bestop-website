import React from 'react'
import '../../stylesheet/styles.css';

const Rentals = () => {
  return(
    <>
    <h1 id ='rentalMessage'>Available Rentals</h1>
    <div id='contact'>
      <div id='rental'>
        <div id='rentalImage'>
          <img src='https://i.imgur.com/HXS98BO_d.webp?maxwidth=760&fidelity=grand'></img>
        </div>
        <div id='rentalInfo'>
          <p>Rental Price</p>
          <p>Property Address</p>
          <a>Additional Details</a>
          <button id='showingButton'>Request a Showing</button>
        </div>
      </div>
    </div>
    <a id='rentalApp'>Rental Application</a>
    </>
  )
}

export default Rentals;