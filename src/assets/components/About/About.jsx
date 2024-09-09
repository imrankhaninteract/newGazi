import React from 'react';
import './About.css'

const AboutSection = () => {
  return (
    <main>
      <article>
        <section className="about" id="about">
          <figure className="about-banner">
            <img
              src="https://images.pexels.com/photos/19846351/pexels-photo-19846351/free-photo-of-view-of-a-dining-area-and-a-living-room-in-a-modern-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A man in a blue shirt with a thinking expression"
              className="w-100"
            />
          </figure>

          <div className="about-content section-content">
            <p className="section-subtitle">About Us</p>

            <h2 className="h3 section-title">Need a Creative Product? We can Help You!</h2>

            <p className="section-text">
              Hey, I’m Shohag Gazi, your go-to home interior designer! I’m all about turning your space into a haven of style and comfort. With a passion for creative solutions, I’ll bring your ideas to life, crafting rooms that reflect your unique personality. From solo projects to seamless teamwork, I thrive on making your dream home a reality, one design detail at a time.
            </p>

            <div className="btn-group">
              <button className="btn btn-secondary">Hire Us</button>
              <button className="btn btn-primary">Projects</button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default AboutSection;
