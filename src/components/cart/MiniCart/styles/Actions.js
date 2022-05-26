import styled from "styled-components";

export const CartButton = styled.button`
  border: 1px solid #000;
  background: #fff;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .5s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

CartButton.displayName = "CartButton";

export const CheckoutButton = styled.button`
  border: none;
  background: rgba(94, 206, 123, 1);
  color: #fff;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .5s;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

CheckoutButton.displayName = "CheckoutButton";
