import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: rgba(94, 206, 123, 1);
  filter: grayscale(${props => props.disabled ? '100%' : '0%'});
  border: none;
  color: #fff;
  width: 100%;
  padding: 0.75rem 1.5rem;
  opacity: 0.8;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .5s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

ButtonWrapper.displayName = "ButtonWrapper";
