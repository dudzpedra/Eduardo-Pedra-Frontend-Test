import styled from "styled-components";

export const CurrencyList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  position: absolute;
  left: -50%;
  z-index: 1000;
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
`;

CurrencyList.displayName = "CurrencyList";
