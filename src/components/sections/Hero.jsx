import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScrollReveal from "../../hooks/useScrollReveal";
import pdf from "../../static/resume.pdf";

const StyledHero = styled.section`
  width: 70%;
  margin: auto;
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  align-items: center;

  .reveal {
    opacity: 1;
  }

  @media screen and (max-width: 425px) {
    width: 85%;
  }

  > div {
    max-width: 1000px;

    h1 {
      font-size: clamp(2.5rem, 8vw, 4.8rem);
      font-weight: 600;
      color: var(--white);
      visibility: hidden;
    }

    h2 {
      font-size: clamp(2.5rem, 8vw, 4.8rem);
      font-weight: 600;
      line-height: 0.9;
      visibility: hidden;
    }

    h3 {
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: 400;
      max-width: 60%;
      margin-top: 10px;
      line-height: 1.3;
      visibility: hidden;

      @media screen and (max-width: 768px) {
        max-width: 80%;
      }

      @media screen and (max-width: 425px) {
        max-width: unset;
      }
    }
    p {
      line-height: 1.5;
      color: var(--aquamarine);
      font-size: clamp(0.9rem, 2vw, 1rem);
      visibility: hidden;
    }

    a {
      display: inline-block;
      margin-top: 10px;
      border-radius: 5px;
      color: var(--aquamarine);
      border: 1px solid var(--aquamarine);
      padding: 13px 25px 10px;
      transition: all 0.2s ease;
      cursor: pointer;
      visibility: hidden;
    }

    a:hover {
      background-color: var(--teal);
    }
  }
`;

export default function Hero() {
  const { lang } = useLang();
  useScrollReveal(["#hero p", "#hero h1", "#hero h2", "#hero h3", "#hero a"], {
    delay: 1250,
    distance: "30px",
    origin: "bottom",
  });

  return (
    <StyledHero id="top">
      <div id="hero">
        <p>{lang.greeting}</p>
        <h1>{lang.fullname}</h1>
        <h2>{lang.whatIDo}</h2>
        <h3>{lang.intro}</h3>
        <a href={pdf} target="_blank" rel="noreferrer">
          {lang.resume}
        </a>
      </div>
    </StyledHero>
  );
}
