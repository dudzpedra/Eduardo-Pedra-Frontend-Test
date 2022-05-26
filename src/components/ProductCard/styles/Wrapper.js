import styled from "styled-components";

export const Card = styled.div`
  //width: 14vw;
  width: 15rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
  filter: opacity(${(props) => (props.inStock ? "100%" : "40%")});
  &:hover {
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
    #add-to-cart-icon {
      display: ${(props) => props.inStock && "block"};
    }
  }
`;
Card.displayName = "Card";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
ImageWrapper.displayName = "ImageWrapper";

export const Content = styled.div`
  width: 100%;
`;
Content.displayName = "Content";
