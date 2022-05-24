import styled from "styled-components";

export const CurrencyList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  position: absolute;
  left: -50%;
  z-index: 1000;
`;

CurrencyList.displayName = "CurrencyList";
