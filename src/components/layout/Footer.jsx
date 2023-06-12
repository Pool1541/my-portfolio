import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const StyledFooter = styled.footer`
  height: 60px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 3px;

    p {
      letter-spacing: 1px !important;
    }
  }

  p {
    letter-spacing: 2px;
    a {
      color: var(--white);
    }
  }

  ul {
    display: none;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 7px;

    @media screen and (max-width: 1120px) {
      display: flex;
    }

    li {
      width: 100%;
      flex-grow: 1;
    }

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    a:hover svg {
      transition: color 0.3s ease;
      color: var(--white);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        © Copyright 2023. Made by{" "}
        <a href="https://pool-llerena.netlify.app/" title="Pool Llerena">
          Pool Llerena
        </a>
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/Pool1541"
            title="Github"
            target="_blank"
            rel="noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pool-llerena/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/aaryh_/"
            title="Instagram"
            target="_blank"
            rel="noreferrer">
            <FiInstagram />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}
