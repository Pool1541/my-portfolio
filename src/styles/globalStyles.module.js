import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(../assets/fonts/Calibre-Light.woff2);
  }
  
  @font-face {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(../assets/fonts/Calibre-Regular.woff2);
  }

  @font-face {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(../assets/fonts/Calibre-Medium.woff2);
  }

  @font-face {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(../assets/fonts/Calibre-Semibold.woff2);
  }

  :root {
    --rich-black: #051021;
    --oxford-blue: #0a192f;
    --oxford-blue-light: #172a46;
    --aquamarine: #64fcda;
    --teal: #087e8b44;
    --periwinkle: #c4ceed;
    --alice-blue: #e6f1ff;
    --slate-gray: #77809a;
    --light-slate: #a8bdd1;
    --white: #d4e2fd;
    --size-title: clamp(25px, 8vw, 4.6rem);
    --size-paragraph: clamp(14px, 2vw, 18px);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    width: 100%;
    background-color: var(--oxford-blue);
    color: var(--slate-gray);
    font-size: 18px;
    font-family: "Calibre", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;

    @media screen and (max-width: 760px) {
      font-size: 16px;
    }
  }

  h1::selection,
  h2::selection,
  h3::selection,
  p::selection,
  a::selection,
  button::selection,
  span::selection,
  li::selection,
  label::selection,
  img::selection {
    background-color: rgb(195, 240, 225);
    color: rgb(63, 185, 185);
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  input, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    color: var(--slate-gray);
  }

  a, a:visited {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }


`;

export default GlobalStyle;