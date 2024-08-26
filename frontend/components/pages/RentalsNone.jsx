import React from 'react'
import '../App.scss'

const RentalsNone = () => {
    return (
        <>
            <header className="header">Available Rentals</header>
            <main>
                <h3 className="title" style={{color: "#000000"}}> There are currently no available rentals.</h3>
            </main>
        </>
    )
}

export default RentalsNone;