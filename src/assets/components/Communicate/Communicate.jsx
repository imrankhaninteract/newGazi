import React from "react";
import './Communicate.css'

const ContactSection = () => {
  return (
    <main>
    <article class="container">
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">
          Have You Any Project? Please Drop a Message
        </h2>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form and I’ll
          be in touch as soon as possible.
        </p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                941 Saqrqorish Road, Alandalos, Grnata, WA 47122-4194
              </address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:01234567789" className="contact-info">
                (01) 234 567 789
              </a>
              <a href="tel:09765432200" className="contact-info">
                (09) 765 432 200
              </a>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:info@jack.com" className="contact-info">
                info@jack.com
              </a>
              <a href="mailto:support@jack.com" className="contact-info">
                support@jack.com
              </a>
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Twitter</div>
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">LinkedIn</div>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">YouTube</div>
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <img
          src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contact"
          className="contactImg"
        />
      </div>
    </section>
    </article>
    </main>
    
  );
};

export default ContactSection;
