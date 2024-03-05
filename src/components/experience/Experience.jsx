import React, { useRef, useEffect, useState } from "react";
import "./experience.css";


const Experience = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSkills = -1; // Number of skills visible at a time
  const cardWidth = 320; // Width of each skill card
 

  const skillsData = [
    {
      icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png",
      title: "HTML",
      experience: "2+ years experience",
      level: "Expert Level",
    },
    {
      icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
      title: "CSS",
      experience: "2+ years experience",
      level: "Expert Level",
    },
    {
      icon: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
      title: "JavaScript",
      experience: "1+ years experience",
      level: "Intermediate Level",
    },
    {
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      title: "ReactJS",
      experience: "1+ years experience",
      level: "Intermediate Level",
    },
    {
      icon: "https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-256.png",
      title: "Tailwind CSS",
      experience: "2+ years experience",
      level: "Expert Level",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-512/sass-226054.png",
      title: "Sass",
      experience: "2+ years experience",
      level: "Intermediate Level",
    },
    {
      icon: "https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-512.png",
      title: "Next.js",
      experience: "1 years experience",
      level: "Beginner Level",
    },
   
    {
      icon: "	https://cdn4.iconfinder.com/data/icons/logos-3/188/nodejs-light-512.png",
      title: "Node.js",
      experience: "1+ years experience",
      level: "Intermediate Level",
    },
    {
      icon: "	https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png",
      title: "MongoDB",
      experience: "1 years experience",
      level: "Beginner Level",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png",
      title: "Bootstrap",
      experience: "2+ years experience",
      level: "Intermediate Level",
    },
    {
      icon: "https://cdn2.iconfinder.com/data/icons/social-media-iconez/64/GitHub-64.png",
      title: "Github",
      experience: "2+ years experience",
      level: "Intermediate Level",
    },
  ];
  
  const scrollToIndex = (index) => {
    const newIndex = Math.max(0, Math.min(index, skillsData.length - visibleSkills));
    sliderRef.current.scrollLeft = newIndex * cardWidth;
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   let interval;

  //   const autoSlide = () => {
  //     interval = setInterval(() => {
  //       scrollToIndex(currentIndex + 1);
  //     }, slideInterval);
  //   };

  //   slider.addEventListener("mouseenter", () => {
  //     clearInterval(interval);
  //   });

  //   slider.addEventListener("mouseleave", () => {
  //     autoSlide();
  //   });

  //   autoSlide();

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <section id="experience">
      <h5>Skills and Experience</h5>
      <h2>What I Bring to the Table</h2>

      <div
        className="slider-container"
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{
              width: cardWidth + "px",
              flexShrink: 0,
              scrollSnapAlign: "start",
              padding: "0 10px",
            }}
          >
            <img src={skill.icon} alt={skill.title} />
            <h4>{skill.title}</h4>
            <p>{skill.experience}</p>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button
          className="slide-button left"
          onClick={() => scrollToIndex(currentIndex - 1)}
          style={{ color: currentIndex === 0 ? 'rgba(255, 255, 255, 0.3)' : 'var(--color-light)' }}
        >
          ←
        </button>
        <button
          className="slide-button right"
          onClick={() => scrollToIndex(currentIndex + 1)}
          style={{
            color:
              currentIndex >= skillsData.length - visibleSkills
                ? 'rgba(255, 255, 255, 0.3)'
                : 'var(--color-light)',
          }}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Experience;