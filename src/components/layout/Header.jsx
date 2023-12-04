import { useState } from 'react';
import styled from 'styled-components';
import useLang from '../../hooks/useLang';
import useScroll from '../../hooks/useScroll';
import BurgerBtn from '..//BurgerBtn';
import useScrollReveal from '../../hooks/useScrollReveal';
import Logo from '../../assets/icons/Logo';
import Language from '../elements/Language';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 20;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: #0a192fc1;
  box-shadow: ${({ scroll }) => (scroll !== 0 ? '0 1px 5px 1px #000000a8' : 'none')};
  padding: 0 40px;
  transition: all 0.3s ease;

  &.hidden {
    transform: translateY(-70px);
  }

  @media screen and (max-width: 660px) {
    padding: 0 20px;
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
        transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(100vw)')};

        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }

      li {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-size: 1.2rem;
        font-weight: 500;
        visibility: hidden;

        a {
          display: flex;
          flex-direction: column;
          height: 1.5rem;
          overflow-y: hidden;

          &:hover > p {
            transform: translateY(-27px);
            @media screen and (max-width: 660px) {
              transform: translateY(-23px);
            }
          }
        }
      }
    }
  }
`;

const NavLink = styled.p`
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
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

  useScrollReveal(['#list li'], {
    delay: 1000,
    distance: '50px',
    origin: 'bottom',
  });

  return (
    <StyledHeader isActive={isActive} id='header' scroll={scroll}>
      <div>
        <Logo />
        <nav>
          <ul id='list'>
            <li>
              <a href='#top' onClick={handleClick}>
                <NavLink>{navBar.home}</NavLink>
                <NavLink bold>{navBar.home}</NavLink>
              </a>
            </li>
            <li>
              <a href='#about' onClick={handleClick}>
                <NavLink>{navBar.about}</NavLink>
                <NavLink bold>{navBar.about}</NavLink>
              </a>
            </li>
            <li>
              <a href='#projects' onClick={handleClick}>
                <NavLink>{navBar.projects}</NavLink>
                <NavLink bold>{navBar.projects}</NavLink>
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleClick}>
                <NavLink>{navBar.contact}</NavLink>
                <NavLink bold>{navBar.contact}</NavLink>
              </a>
            </li>
            <li>
              <Language />
            </li>
          </ul>
        </nav>
        <BurgerBtn isActive={isActive} handleClick={handleClick} />
      </div>
    </StyledHeader>
  );
}
