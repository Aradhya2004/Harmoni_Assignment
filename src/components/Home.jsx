import React from 'react'
import Products from './Products'
import bgImg from '../assets/images/bg.avif'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-white bg-dark border-0">
                <img src={bgImg} className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home
