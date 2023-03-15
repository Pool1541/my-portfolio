import styled from "styled-components";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";

const StyledContainer = styled.div`
  /* transform: translateY(0); */
`;

export default function Home() {
  return (
    <StyledContainer>
      <Header />
      <Main />
      <Footer />
    </StyledContainer>
  );
}
