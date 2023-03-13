import { useState } from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScroll from "../../hooks/useScroll";
import BurgerBtn from "..//BurgerBtn";

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 20;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: #0a192fc1;
  box-shadow: ${({ scroll }) =>
    scroll !== 0 ? "0 1px 5px 1px #000000a8" : "none"};
  padding: 0 40px;
  transition: all 0.3s ease;

  &.hidden {
    transform: translateY(-70px);
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      gap: 1.5rem;

      @media screen and (max-width: 660px) {
        position: fixed;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        top: 70px;
        width: 100vw;
        left: 0;
        height: calc(100vh);
        padding: 40px 20px;
        background-color: var(--oxford-blue);
        transition: transform 0.3s ease-in-out;
        transform: ${({ isActive }) =>
          isActive ? "translateX(0)" : "translateX(100vw)"};

        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }

      li {
        white-space: nowrap;
        font-size: 1.2rem;
        font-weight: 500;

        a {
          display: flex;
          flex-direction: column;
          height: 1.5rem;
          overflow-y: hidden;

          &:hover > p {
            transform: translateY(-27px);
          }
        }
      }
    }
  }
`;

const NavLink = styled.p`
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  transition: transform 0.3s ease;
`;

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { scroll } = useScroll();

  const {
    lang: { navBar },
  } = useLang();

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <StyledHeader isActive={isActive} id="header" scroll={scroll}>
      <div>
        <div>Logo</div>
        <nav>
          <ul>
            <li>
              <a href="#top" onClick={handleClick}>
                <NavLink>{navBar.home}</NavLink>
                <NavLink bold>{navBar.home}</NavLink>
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleClick}>
                <NavLink>{navBar.about}</NavLink>
                <NavLink bold>{navBar.about}</NavLink>
              </a>
            </li>
            <li>
              <a href="#proyects" onClick={handleClick}>
                <NavLink>{navBar.proyects}</NavLink>
                <NavLink bold>{navBar.proyects}</NavLink>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                <NavLink>{navBar.contact}</NavLink>
                <NavLink bold>{navBar.contact}</NavLink>
              </a>
            </li>
          </ul>
        </nav>
        <BurgerBtn isActive={isActive} handleClick={handleClick} />
      </div>
    </StyledHeader>
  );
}
