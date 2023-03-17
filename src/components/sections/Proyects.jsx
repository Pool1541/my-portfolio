import React from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScrollReveal from "../../hooks/useScrollReveal";
import GridItem from "../elements/GridItem";
import Section from "../elements/Section";
import StyledSubtitle from "../elements/Subtitle";

const StyledGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 40px 20px 0;

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const proyects = [
  {
    title: "Cinemo",
    imageUrl: require("../../assets/images/cinemo.webp"),
    stack: ["React", "Css modules", "Firebase"],
    demoUrl: "https://pool1541.github.io/cinemo/",
    GithubUrl: "https://github.com/Pool1541/cinemo",
    id: "left",
  },
  {
    title: "TasksApp",
    imageUrl: require("../../assets/images/tasksapp.webp"),
    stack: ["React", "Styled-components", "Firebase"],
    demoUrl: "https://pool1541.github.io/tasks-app/",
    GithubUrl: "https://github.com/Pool1541/tasks-app",
    id: "right",
  },
  {
    title: "Global notes",
    imageUrl: require("../../assets/images/globalnotes.webp"),
    stack: ["React", "Styled-components", "firebase"],
    demoUrl: "https://pool1541.github.io/global-notes-v2.0/",
    GithubUrl: "https://github.com/Pool1541/global-notes-v2.0",
    id: "left",
  },
  {
    title: "Rick&Morty",
    imageUrl: require("../../assets/images/rickandmorty.webp"),
    stack: ["React", "Styled-components", "fetch"],
    demoUrl: "https://pool1541.github.io/rick-and-morty-page/",
    GithubUrl: "https://github.com/Pool1541/rick-and-morty-page",
    id: "right",
  },
  {
    title: "Pokedex",
    imageUrl: require("../../assets/images/pokeapi.webp"),
    stack: ["Javascript vanilla", "Css", "Html"],
    demoUrl: "https://pool1541.github.io/pokeapi/",
    GithubUrl: "https://github.com/Pool1541/pokeapi",
    id: "left",
  },
  {
    title: "Python sqlite Crud",
    imageUrl: require("../../assets/images/pythonsqlite.webp"),
    stack: ["Python", "Tkinter", "Sqlite"],
    demoUrl: "https://github.com/Pool1541/crud-compensados",
    GithubUrl: "https://github.com/Pool1541/crud-compensados",
    id: "right",
  },
];

export default function Proyects() {
  const { lang } = useLang();

  useScrollReveal(["#proyect-title"], {
    origin: "bottom",
    distance: "50px",
  });
  useScrollReveal(["#left"], {
    origin: "left",
    distance: "50px",
  });
  useScrollReveal(["#right"], {
    origin: "right",
    distance: "50px",
  });
  return (
    <Section id="proyects">
      <StyledSubtitle id="proyect-title">{lang.proyects}</StyledSubtitle>
      <StyledGrid>
        {proyects.map((proyect, index) => (
          <GridItem data={proyect} key={index} id={proyect.id} />
        ))}
      </StyledGrid>
    </Section>
  );
}
