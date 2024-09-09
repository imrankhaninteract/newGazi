import React from 'react';
import './Works.css'

const Portfolio = () => {
  return (
    <main>
      <article className="container">
        <section className="project" id="portfolio">
          <ul className="project-list" id="portfolio1">
            <li>
              <div className="project-content section-content">
                <p className="section-subtitle">My Works</p>
                <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
                <p className="section-text">
                  We specialize in crafting exquisite interior spaces that endure the test of time. Our meticulously designed websites boast well-documented, clean code, ensuring seamless functionality and effortless navigation for even the most non-technical clients. With an elegant interface that exudes sophistication, we provide a virtual experience that parallels the beauty and simplicity of our interior designs.
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
    image: "https://images.pexels.com/photos/6899397/pexels-photo-6899397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A macintosh on a yellow background.",
    title: "Lorem Ipsum Dolor 01",
    dateTime: "2022-04",
    publishDate: "April 2022"
  },
  {
    link: "#",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "A fujifilm instant camera on a dark electric blue background.",
    title: "Lorem Ipsum Dolor 07",
    dateTime: "2022-04",
    publishDate: "April 2022"
  }
];

export default Portfolio;
