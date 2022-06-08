import React from "react";
import '../stylesheets/button-secundary.css';


const ButtonSecundary = ({ text }) => {

  return (
    <button className="buttonSecundary" type='button'>{ text }</button>
  );

}

export default ButtonSecundary;