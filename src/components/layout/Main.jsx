import styled from "styled-components";
import Hero from "../sections/Hero";
import ParticlesJS from "../ParticlesJS";
import About from "../sections/About";
import Proyects from "../sections/Proyects";
import Contact from "../sections/Contact";
import Aside from "../sections/Aside";

const StyledMain = styled.main`
  width: 100%;
  max-width: 2000px;
  min-height: 100vh;
  margin: auto;
  position: relative;
`;

export default function Main() {
  return (
    <StyledMain>
      <ParticlesJS />
      <Hero />
      <About />
      <Proyects />
      <Contact />
      <Aside />
    </StyledMain>
  );
}
