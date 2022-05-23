import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  cursor: pointer;
  padding: .5rem;
  display: flex;
  flex-direction: column;;
  &:hover {
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);

    #add-to-cart-icon {
      display: block;
    }
  }
`;

Card.displayName = "Card";

export const Content = styled.div`
  width: 354px;
`;

Content.displayName = "Content";
