import React from 'react';
import './Restaurant.css'

const RestaurantPortfolio = () => {
  return (
    <main>
      <article className="container">
        <section className="project" id="portfolio">
          <ul className="project-list" id="portfolio3">
            <li>
              <div className="project-content section-content">
                <p className="section-subtitle">My Restaurants Works</p>
                <h2 className="h3 section-title">Indulge in Culinary Excellence: Crafting Memorable Dining Experiences with Elegance and Flair</h2>
                <p className="section-text">
                  Step into a realm where every corner tells a story of culinary craftsmanship and refined elegance. At our studio, we don't just design spaces; we curate dining experiences that stand the test of time. Explore our portfolio and discover a world where creativity meets functionality, where every detail is meticulously crafted to perfection. From cozy bistros to upscale fine dining, our interior designs are tailored to inspire awe and admiration. Let us transform your restaurant into a masterpiece that reflects your culinary vision and enhances guest satisfaction. Welcome to a new era of restaurant interiors, where style meets substance, and every dining space tells a delicious story.
                </p>
              </div>
            </li>

            {/* Project Cards */}
            {restaurantProjectData.map((project, index) => (
              <li key={index}>
                <a href={project.link} className="project-card">
                  <figure className="card-banner">
                    <img src={project.image} className="w-100" alt={project.altText} />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">{project.title}</h3>
                    <time className="publish-date" dateTime={project.dateTime}>{project.publishDate}</time>
                  </div>
                </a>
              </li>
            ))}

            {/* Load More Button */}
            <li>
              <button className="load-more">Load more work</button>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

// Example project data
const restaurantProjectData = [
  {
    link: "#",
    image: "https://images.pexels.com/photos/10398557/pexels-photo-10398557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A macintosh on a yellow background.",
    title: "Lorem Ipsum Dolor 01",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/5914495/pexels-photo-5914495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "On a Blue background, a Wacom and a mouse.",
    title: "Lorem Ipsum Dolor 02",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A Cassette tape on a mellow apricot background.",
    title: "Lorem Ipsum Dolor 03",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/2829032/pexels-photo-2829032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Blue digital watch on a dark liver background.",
    title: "Lorem Ipsum Dolor 04",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "On a dark liver background, Airport luggage car carrying a luggage.",
    title: "Lorem Ipsum Dolor 05",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "On a yellow background, a digital watch and a glass.",
    title: "Lorem Ipsum Dolor 06",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/263209/pexels-photo-263209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A fujifilm instant camera on a dark electric blue background.",
    title: "Lorem Ipsum Dolor 07",
    dateTime: "2022-04",
    publishDate: "April 2022"
  }
];

export default RestaurantPortfolio;
