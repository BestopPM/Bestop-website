import React from 'react'
import '../../stylesheet/styles.css';

const Rentals = () => {

  const sendForm = (e) => {
      e.preventDefault();

      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text)
          })
  }

  return(
    <>
    <h1 id ='rentalMessage'>Available Rentals</h1>
    <div id='contact'>
      <div id='rental'>
        <div id='rentalImage'>
          <img src='https://i.imgur.com/HXS98BO_d.webp?maxwidth=760&fidelity=grand'></img>
        </div>
        <div id='rentalInfo'>
          <p>Rental Price: </p>
          <p>Property Address: </p>
          <a href='https://www.zillow.com/'>Additional Details</a>
          <button id='showingButton' href='/rentalModal'>Request a Showing</button>
        </div>
      </div>
    </div>
    <a id='rentalApp' href='/rentalApp'>Rental Application</a>
    </>
  )
}

export default Rentals;