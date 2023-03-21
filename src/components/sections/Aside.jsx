import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import useScrollReveal from "../../hooks/useScrollReveal";

const StyledAside = styled.aside`
  width: 60px;
  height: 200px;
  border-radius: 5px;
  background-color: var(--rich-black);
  position: fixed;
  top: calc(50vh - 100px);
  left: 0;
  z-index: 100;
  visibility: hidden;

  @media screen and (max-width: 1120px) {
    display: none;
  }

  ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1px;

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
      font-size: 1.2rem;
    }

    a:hover svg {
      transition: color 0.3s ease;
      color: var(--white);
    }
  }
`;

export default function Aside() {
  useScrollReveal(["#aside", "#aside li"], { delay: 1500 });

  return (
    <StyledAside id="aside">
      <ul>
        <li>
          <a
            href="https://github.com/Pool1541"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pool-llerena/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/aaryh_/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
      </ul>
    </StyledAside>
  );
}
