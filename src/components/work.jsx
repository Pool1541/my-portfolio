import React from "react";
import '../stylesheets/work.css';
import GridItem from "./grid-item";

const Work = () => {

  return (

    <section className='section__work' id='work'>
      <div className='section__work__text'>
        <h3>Text Title</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio saepe voluptatem quas laborum quibusdam dolore accusantium dolorum ex non id?</p>
      </div>
      <div className='section__work__grid'>
        <GridItem titleGitHub={ 'Github Link' }
          titleExternal={ 'External Link' }
          image={'imagen1.webp'}
          nameImg={'imagen de la página'}
          githubLink={'https://github.com/Pool1541/pokeapi'}
          externalLink={'https://pool1541.github.io/pokeapi/'}
           />
        <GridItem titleGitHub={ 'Github Link' }
          titleExternal={ 'External Link' }
          image={'imagen3.PNG'}
          nameImg={'imagen de la página'}
          githubLink={'https://github.com/Pool1541/aplicacionDeTareas'}
          externalLink={'https://pool1541.github.io/aplicacionDeTareas/'}
           />
        <GridItem titleGitHub={ 'Github Link' }
          titleExternal={ 'External Link' }
          image={'imagen4.PNG'}
          nameImg={'imagen de la página'}
          githubLink={'https://github.com/Pool1541/calculadoraReact'}
          externalLink={'https://pool1541.github.io/calculadoraReact/'}
           />
        <GridItem titleGitHub={ 'Github Link' }
          titleExternal={ 'External Link' }
          image={'imagen5.PNG'}
          nameImg={'imagen de la página'}
          githubLink = {'https://github.com/Pool1541/foodgo'}
          externalLink= {'https://pool1541.github.io/foodgo/'}
           />
      </div>
    </section>
  );
}

export default Work;