import { useEffect } from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScroll from "../../hooks/useScroll";

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-2px);
  img {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }
  > button {
    height: 26px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--slate-gray);
    font-size: 0.8rem;
    font-weight: 300;

    p {
      text-transform: capitalize;
    }
  }

  .lenguages {
    width: max-content;
    position: absolute;
    bottom: -60px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transform: scaleY(0);
    opacity: 0;
    transition: all 0.2s ease-out;
    transform-origin: top;

    &.show {
      transform: scaleY(1);
      opacity: 1;
    }

    button {
      height: 26px;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--slate-gray);
      background-color: var(--oxford-blue);
      font-size: 0.7rem;
      font-weight: 300;

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export default function Language() {
  const { scroll } = useScroll();
  const { lang, spanish, english } = useLang();

  function handleClick() {
    document.querySelector(".lenguages").classList.toggle("show");
  }

  useEffect(() => {
    document.querySelector(".lenguages").classList.remove("show");
  }, [scroll]);

  return (
    <StyledLanguage>
      <button type="button" onClick={handleClick} title={lang.lenguage}>
        <img
          src={require(`../../assets/images/${lang.current}.png`)}
          alt="spanish"
        />
        <p>{lang.current}</p>
      </button>
      <div className="lenguages">
        <button title={lang.english} onClick={() => english(handleClick)}>
          <img src={require("../../assets/images/en.png")} alt={lang.english} />
          <p>{lang.english}</p>
        </button>
        <button title={lang.spanish} onClick={() => spanish(handleClick)}>
          <img src={require("../../assets/images/es.png")} alt={lang.spanish} />
          <p>{lang.spanish}</p>
        </button>
      </div>
    </StyledLanguage>
  );
}
