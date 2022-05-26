import styled from "styled-components";

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  background: #fff;
  cursor: pointer;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .4s;

  &:hover {
    background: #000;
    color: #fff;
  }
`

QuantityButton.displayName = 'QuantityButton'