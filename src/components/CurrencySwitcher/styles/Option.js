import styled from "styled-components";

export const CurrencyOption = styled.button`
  padding: 1rem 0.5rem;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  background: #fff;
  transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.5s;

  &:hover {
    background: rgba(238, 238, 238, 1);
  }
`;

CurrencyOption.displayName = "CurrencyOption";
