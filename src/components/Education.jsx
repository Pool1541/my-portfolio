import styled from "styled-components";
import useLang from "../hooks/useLang";
import StyledContainer from "./elements/StyledContainer";

const Container = styled(StyledContainer)`
  flex-direction: column;

  h3 {
    color: var(--white);
  }

  ul {
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    }
  }

  a {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-weight: 700;
    background-color: var(--oxford-blue);
    box-shadow: 3px 3px 5px 1px #00000032;

    img {
      border-radius: 8px;
      font-size: clamp(0.9rem, 2vw, 1.2rem);
    }
  }
`;

export default function Education({ id }) {
  const { lang } = useLang();

  return (
    <Container id={id}>
      <h3>{lang.education.title}</h3>
      <ul>
        <li title="Cibertec">
          <a
            href="https://www.cibertec.edu.pe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/images/cibertec.webp")}
              alt="Cibertec"
              loading="lazy"
            />
            <p>{lang.education.cibertec}</p>
          </a>
        </li>

        <li title="Alura latam">
          <a
            href="https://www.aluracursos.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/images/alura.webp")}
              alt="Alura latam"
              loading="lazy"
            />
            <p>{lang.education.alura}</p>
          </a>
        </li>

        <li title="FreeCodeCamp">
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/images/freecodecamp.webp")}
              alt="FreeCodeCamp"
              loading="lazy"
            />
            <p>{lang.education.freecodecamp}</p>
          </a>
        </li>
      </ul>
    </Container>
  );
}
