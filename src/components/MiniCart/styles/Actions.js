import styled from "styled-components";

export const CartButton = styled.button`
  border: 1px solid #000;
  background: #fff;
  font-size: 1em;
  padding: 1rem 2rem;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: #ddd;
  }
`;

CartButton.displayName = "CartButton";

export const CheckoutButton = styled.button`
  border: none;
  background: rgba(94, 206, 123, 1);
  color: #fff;
  font-size: 1em;
  padding: 1rem 2rem;
  cursor: pointer;
  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover {
    opacity: 0.9;
  }
`;

CheckoutButton.displayName = "CheckoutButton";
