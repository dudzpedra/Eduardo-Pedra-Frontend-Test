import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const CartAction = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

export const CartQuantity = styled.div`
  background: #000;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -15px;
  right: -15px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
`;

Actions.displayName = "Actions";
CartAction.displayName = "CartAction";
CartQuantity.displayName = "CartQuantity";
