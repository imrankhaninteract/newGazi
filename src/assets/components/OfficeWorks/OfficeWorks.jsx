import React from 'react';
import './OfficeWorks.css'

const OfficePortfolio = () => {
  return (
    <main>
      <article className="container">
        <section className="project" id="portfolio">
          <ul className="project-list" id="portfolio2">
            <li>
              <div className="project-content section-content">
                <p className="section-subtitle">My Office Works</p>
                <h2 className="h3 section-title">Redefining Office Interiors with Craftsmanship and Sophistication</h2>
                <p className="section-text">
                  Step into a realm where every corner tells a story of craftsmanship and elegance. At our studio, we don't just design spaces; we curate experiences that stand the test of time. Explore our portfolio and discover a world where creativity meets functionality, where every detail is meticulously crafted to perfection. From sleek modern offices to timeless classics, our interior designs are tailored to inspire awe and admiration. Let us transform your workspace into a masterpiece that reflects your vision and enhances productivity. Welcome to a new era of office interiors, where style meets substance, and every space tells a story.
                </p>
              </div>
            </li>

            {/* Project Cards */}
            {projectData.map((project, index) => (
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
const projectData = [
  {
    link: "#",
    image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A macintosh on a yellow background.",
    title: "Lorem Ipsum Dolor 01",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/633269/pexels-photo-633269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "On a Blue background, a Wacom and a mouse.",
    title: "Lorem Ipsum Dolor 02",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A Cassette tape on a mellow apricot background.",
    title: "Lorem Ipsum Dolor 03",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/3736520/pexels-photo-3736520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

export default OfficePortfolio;
