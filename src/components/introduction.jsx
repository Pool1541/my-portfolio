import React from "react";
import ButtonSecundary from "./button-secundary";
import '../stylesheets/introduction.css';


const Introduction = () => {
  return (
    <section className='section__introduction'>
      <div className='section__container'>
        <p className='section__introduction__textTop'>
          Hi, my name is
        </p>
        <h3 className='section__introduction__textMid'>Pool Llerena.</h3>
        <h3 className='section__introduction__textMid section__introduction__textMid--secundary'>I build things for the web.</h3>
        <p className='section__introduction__textBottom'>I'm a web developer specializing in buinding exceptional digital experiences. i'm focused on building accessible, human-centered products at <span>Lorem ipsum.</span></p>
        <ButtonSecundary text= {'Resume'}></ButtonSecundary>
      </div>
    </section>
  );
}

export default Introduction;