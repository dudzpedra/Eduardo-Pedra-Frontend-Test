import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: #00cd00;
  color: #fff;
  padding: 1rem 2rem;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

ButtonWrapper.displayName = 'ButtonWrapper'