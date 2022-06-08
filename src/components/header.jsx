import React from "react";
import '../stylesheets/header.css';
import Button from "./button";


const Header = () => {

  return(
    <header className='header'>
      <nav className='header__navbar'>
        <h3 className='header__navbar__title'>P</h3>
        <ul className='header__navbar__list'>
          <li className="header__navbar__item"><Button text={'About'} href="#about"></Button></li>
          <li className="header__navbar__item"><Button text={'Work'} href="#work"></Button></li>
          <li className="header__navbar__item"><Button text={'Contact'} href="#"></Button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;