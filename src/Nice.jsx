import React from 'react'
import './Nice.css'

const Nice = () => {
  return (
    <>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Welcome to My Website</h2>
            <p>This is a simple website created using HTML and CSS.</p>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>We are a company dedicated to providing the best services to our customers.</p>
        </section>
        <section id="services">
            <h2>Our Services</h2>
            <p>We offer a variety of services to meet your needs.</p>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>You can reach us at contact@example.com.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>

    
    
    </>
  )
}

export default Nice