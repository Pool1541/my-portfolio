import styled from "styled-components";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";

const StyledContainer = styled.div``;

export default function Home({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <StyledContainer>
          <Header />
          <Main />
          <Footer />
        </StyledContainer>
      )}
    </>
  );
}
