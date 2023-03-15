import styled from "styled-components";

const StyledButton = styled.button`
  flex-direction: column;
  gap: 7px;
  display: none;

  @media screen and (max-width: 660px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 2px;
    opacity: 1;
    background-color: var(--aquamarine);
    transition: all 0.3s ease;
  }

  div:first-child {
    transform: ${({ isActive }) =>
      isActive ? "rotate(-45deg) translate(-8px, 6px)" : "none"};
  }

  div:nth-child(2) {
    opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  }

  div:last-child {
    transform: ${({ isActive }) =>
      isActive ? "rotate(45deg) translate(-7px, -5px)" : "none"};
  }
`;

export default function BurgerBtn({ isActive, handleClick }) {
  return (
    <StyledButton isActive={isActive} onClick={handleClick} title="menu">
      <div></div>
      <div></div>
      <div></div>
    </StyledButton>
  );
}
