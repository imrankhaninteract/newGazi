import React from 'react';
import Icon1 from '../images/stats-card_icon-1.png'
import Icon2 from '../images/stats-card_icon-2.png'
import Icon3 from '../images/stats-card_icon-3.png'


const StatsSection = () => {
  const statsData = [
    {
      link: '#',
      imgSrc: Icon1,
      alt: 'Badge icon',
      title: '12+',
      description: 'Years of Experience',
    },
    {
      link: '#',
      imgSrc: Icon2,
      alt: 'Checkmark icon',
      title: '230+',
      description: 'Completed Projects',
    },
    {
      link: '#',
      imgSrc: Icon3,
      alt: 'Peoples rating icon',
      title: '95+',
      description: 'Happy Clients',
    },
  ];

  return (
    <main>
      <article className="container">
        <section className="stats" id="stats">
          <ul className="stats-list">
            {statsData.map((stat, index) => (
              <li key={index}>
                <a href={stat.link} className="stats-card">
                  <div className="card-icon">
                    <img src={stat.imgSrc} alt={stat.alt} />
                  </div>
                  <h2 className="h2 card-title">
                    {stat.title} <strong>{stat.description}</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default StatsSection;
