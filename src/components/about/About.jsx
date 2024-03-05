import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Discover My Journey</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src="https://ik.imagekit.io/aq3ybtarw/team/wIpasaReVrye0KVFaClIZ-transformed%20(2).jpeg?updatedAt=1691238545914" alt="about-img" />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>Experienced in developing various websites using a variety of technologies.</small>
            </article>

            <article className='about-card'>
              <AiOutlineUsergroupAdd className='about-icon' />
              <h5>UI/UX</h5>
              <small>Experience In Designing UI/Ux for Clients</small>
            </article>

            <article className='about-card'>
              <AiOutlineFolderOpen className='about-icon' />
              <h5>Projects</h5>
              <small>completed projects in both Front-end and Back-end</small>
            </article>
          </div>

          <p>
            Hi, I'm Rohit Bharti, a B.Tech graduate in Computer Science from VIIT. I am currently working on web development and coding to pursue my career in the software industry. I am passionate about expanding my knowledge and contributing to open-source projects. Cheers!
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
