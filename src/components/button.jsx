import React from "react";
import '../stylesheets/button.css';

const Button = ({ text, href }) => {

  return (
    <a className='button' href={href}>
      <span className='button__first'>{text}</span>
      <span className='button__second'>{text}</span>
    </a>
  );
}

export default Button;