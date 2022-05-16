import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: rgba(94, 206, 123, 1);
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

ButtonWrapper.displayName = "ButtonWrapper";