import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScrollReveal from "../../hooks/useScrollReveal";
import Education from "../Education";
import Section from "../elements/Section";
import StyledContainer from "../elements/StyledContainer";
import Tools from "../Tools";

const StyledSection = styled(Section)`
  @media screen and (max-width: 650px) {
    background-color: var(--rich-black);
  }
`;

const Container = styled(StyledContainer)`
  height: max-content;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 50px 20px;
    border: none;

    .imageContainer {
      height: 300px !important;
      min-width: unset !important;
    }

    .textContainer {
      padding: 0 !important;
    }

    .textContainer h2 {
      margin-top: 20px;
      text-align: center;
    }
  }

  .imageContainer {
    min-width: 300px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      background-color: var(--white);
    }
  }

  .textContainer {
    flex: 1 1 auto;
    padding: 0 0 0 30px;

    h2 {
      font-size: clamp(1.8rem, 3vw, 2rem);
      color: var(--white);
      margin-bottom: 20px;
    }

    p {
      font-size: clamp(1.1rem, 2vw, 1.2rem);
    }
  }
`;

export default function About() {
  const { lang } = useLang();
  useScrollReveal(["#aboutme", "#tools", "#education"], {
    origin: "bottom",
    distance: "50px",
  });

  return (
    <StyledSection id="about">
      <Container id="aboutme">
        <div className="imageContainer">
          <img
            src={require("../../assets/images/me.webp")}
            alt="me"
            loading="lazy"
          />
        </div>
        <div className="textContainer">
          <h2>{lang.navBar.about}</h2>
          <p>{lang.about}</p>
        </div>
      </Container>
      <Tools id="tools" />
      <Education id="education" />
    </StyledSection>
  );
}
