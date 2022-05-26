import styled from "styled-components";

export const CartButton = styled.button`
  border: 1px solid #000;
  background: #fff;
  padding: 1rem 3rem;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

CartButton.displayName = "CartButton";

export const CheckoutButton = styled.button`
  border: none;
  background: rgba(94, 206, 123, 1);
  color: #fff;
  padding: 1rem 3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

CheckoutButton.displayName = "CheckoutButton";
