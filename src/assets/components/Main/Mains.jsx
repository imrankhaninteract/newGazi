import React from 'react'
import './mains.css'


const mains = () => {
  return (
    <>
    <header className="header">
        <h1>Car Enthusiasts</h1>
        <p>Discover Your Dream Car</p>
    </header>

    <section className="hero">
        <img src="featured-car.jpg" alt="Featured Car"/>
        <div className="hero-text">
            <h2>2024 Supercar X</h2>
            <p>The ultimate driving experience with cutting-edge technology and breathtaking design.</p>
        </div>
    </section>

    <section className="car-gallery">
        <div className="car">
            <img src="https://www.pexels.com/photo/white-land-rover-range-rover-suv-on-road-116675/" alt="Car 1"/>
            <h3>Model S1</h3>
            <p>Luxury and performance blended seamlessly.</p>
        </div>
        <div className="car">
            <img src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Car 2"/>
            <h3>Roadster R2</h3>
            <p>Open-top excitement with raw power.</p>
        </div>
        <div className="car">
            <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Car 3"/>
            <h3>Coupe C3</h3>
            <p>Elegance meets agility in every curve.</p>
        </div>
    </section>
    
    </>
  )
}

export default mains