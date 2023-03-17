import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const StyledItem = styled.div`
  min-height: 200px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 6px rgb(0 0 0 / 32%), 0 3px 4px rgb(0 0 0 / 34%);
  transition: all 0.2s ease;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2a90e455;
    transition: opacity 0.5s ease;
  }

  &:hover {
    box-shadow: 0 12px 28px rgb(0 0 0 / 25%), 0 8px 10px rgba(0, 0, 0, 0.541);
  }

  &:hover::after {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > a {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    cursor: pointer;

    &:hover svg {
      color: #000000eb;
    }

    svg {
      font-size: 1.8rem;
      color: #000000c3;
      backdrop-filter: blur(10px);
      border-radius: 50%;
      transition: color 0.2s ease;
    }
  }

  > div {
    width: 100%;
    padding: 10px 10px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    color: var(--white);

    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
    }

    p {
      flex-grow: 2;
    }

    ul {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      color: var(--periwinkle);
    }
  }
`;

export default function GridItem({ data }) {
  const { imageUrl, title, stack, demoUrl, GithubUrl, id } = data;

  function handleClick() {
    window.open(demoUrl);
  }

  return (
    <div target="_blank" rel="noreferrer" id={id} onClick={handleClick}>
      <StyledItem>
        <img src={imageUrl} alt={title} loading="lazy" />
        <a href={GithubUrl} target="_blank" rel="noreferrer" title={title}>
          <AiFillGithub />
        </a>
        <div>
          <p>{title}</p>
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </StyledItem>
    </div>
  );
}
