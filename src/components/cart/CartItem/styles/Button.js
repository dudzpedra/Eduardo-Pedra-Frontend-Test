import styled from "styled-components";

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`

QuantityButton.displayName = 'QuantityButton'