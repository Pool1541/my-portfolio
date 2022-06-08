import React from "react";
import '../stylesheets/about.css';

const About = () => {

  return (
    <section className='section sectionAbout' id='about'>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1A759F" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,256C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <div className='sectionAbout__center'>
        <div className='sectionAbout__tittleContainer'>
            <h3 className="sectionAbout__title">
              About Me
            </h3>
        </div>
        <div className='sectionAbout__container'>
          <div className='sectionAbout__paragraphContainer'>
            <div>
              <p className='sectionAbout__paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut deserunt vel nemo necessitatibus consequuntur, dicta porro sunt autem. Sapiente perspiciatis esse vitae corrupti exercitationem cumque fugiat sit. Voluptatem, aspernatur?
              </p>
              <br/>
              <p className='sectionAbout__paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio et, minima possimus obcaecati quos molestias, fugit labore debitis, aut dolor. Laboriosam, deleniti ab! Possimus, alias ducimus. Nostrum, tempora ab!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio aperiam suscipit ducimus hic adipisci reprehenderit, officia esse earum? Minus?
              </p>
            </div>
            <div className="sectionAbout__skillsContainer">
              <ul className='sectionAbout__listSkills'>
                  <li className='sectionAbout__skill'>
                    JavaSript (ES6+)
                  </li>
                  <li className='sectionAbout__skill'>
                    React
                  </li>
                  <li className='sectionAbout__skill'>
                    Html5
                  </li>
                  <li className='sectionAbout__skill'>
                    Css3
                  </li>
                </ul>
            </div>
          </div>
          <div className="sectionAbout__imageContainer">
            <img src={require('../images/Aboutme.png')} alt="" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;