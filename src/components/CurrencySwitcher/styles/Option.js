import styled from "styled-components";

export const CurrencyOption = styled.button`
padding: 1rem 0.5rem;
border: none;
cursor: pointer;
transition: .4s;
background: #fff;
  &:hover {
    background: rgba(238, 238, 238, 1);
  }
`

CurrencyOption.displayName = 'CurrencyOption'