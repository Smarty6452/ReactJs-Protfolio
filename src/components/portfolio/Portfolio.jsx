import React from "react";
import "./portfolio.css";

import IMG2 from '../../assets/microsoft.png'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const IMG1 = "https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=740&t=st=1691244007~exp=1691244607~hmac=ba3060419313543d5524166051eb519f3ba8e3c4e3388f926f7ebd57d85d5771"

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SmartyFitness - A fitness Blog website ',
    github: 'https://github.com/Smarty6452/SmartyFitness',
    View: 'https://smarty-fitness-blog.netlify.app/'
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-vector/duplicate-concept-illustration_114360-4500.jpg?w=740&t=st=1691244313~exp=1691244913~hmac=d2fa0f9b2431a3eee99b8ac3766a98a2c908273ad1f62861e8f2e9ceed851a5f",
    title: 'MicroSoft - CLone Using Tailwind',
    github: 'https://github.com/Smarty6452/Microsoft-Clone',
    View: 'https://microsoftclone64.netlify.app/'
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-vector/black-vintage-typewriter-wooden-table_1284-39970.jpg?size=626&ext=jpg&ga=GA1.2.573019412.1687241716&semt=sph",
    title: 'WordPlay - manipulate with text',
    github: 'https://github.com/Smarty6452/Word-Play',
    View: 'https://word-play-utility.netlify.app'
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-vector/happy-family-traveling-car-road-with-beautiful-landscape_1284-52164.jpg?size=626&ext=jpg&ga=GA1.2.573019412.1687241716&semt=ais",
    title: 'Skycar- a car rental and booking system',
    github: 'https://github.com/Smarty6452/skycar',
    View: 'https://skycarproject.netlify.app'
  },
  {
    id: 5,
    image: "https://img.freepik.com/free-vector/tiny-woman-pouring-clean-water-from-faucet-with-mountain-landscape_74855-11024.jpg?size=626&ext=jpg&ga=GA1.2.573019412.1687241716&semt=ais",
    title: 'gauge - a water purifier ecommerce website ',
    github: 'https://github.com/Smarty6452/gauge',
    View: 'https://gaugerowebiste.netlify.app/'
  },
  {
    id: 6,
    image: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1691245887~exp=1691246487~hmac=522ba10fefcef35ecfc1d3e81a99c72cc39efdbe62a1dc4e7ca5381a5cad6eb7",
    title: 'crm - a sales management system ',
    github: 'https://github.com/Smarty6452/crm',
    View: 'https://crmsales.netlify.app/'
  },

 
 
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
      {
        data.map(({id, image, title, github, View}) => {
          return (
            <article key={id} className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={image} alt={title}  />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
            <a href={github} className="btn">
             github
            </a>
            <a href= {View}className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;
