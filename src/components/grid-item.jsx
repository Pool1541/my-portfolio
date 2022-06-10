import React from "react";
import '../stylesheets/grid-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GridItem = ({ titleGitHub, titleExternal, nameImg, image, githubLink, externalLink }) => {

  return (
    <div className='card'>
      <img src={require(`../images/${image}`)} alt={`Imagen del proyecto ${nameImg}`} className='card__image' />
      <div className="card__content">
        <h3 className="card__title">Title of card</h3>
        <p className="card__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur esse laudantium laborum! Accusamus, debitis! Dignissimos quos odio repellendus corrupti veritatis?</p>
        <div className="card__iconsContainer">
          <a className="card__icon" href={ githubLink } title={ titleGitHub } aria-label={ titleGitHub } target='_blank'>
            <FontAwesomeIcon icon={ faGithub } className='fontAwesomeIcon' />
          </a>
          <a className='card__icon' href={ externalLink } title={ titleExternal } aria-label={ titleExternal } target='_blank'>
            <FontAwesomeIcon icon= { faArrowUpRightFromSquare } className='fontAwesomeIcon' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GridItem;