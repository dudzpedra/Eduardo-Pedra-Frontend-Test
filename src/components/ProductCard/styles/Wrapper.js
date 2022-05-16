import styled from "styled-components";

export const Card = styled.div`
  width: 386px;
  cursor: pointer;
  margin: 1rem 1rem 1rem 0;
  display: flex;
  flex-direction: column;;
  &:hover {
    box-shadow: 2px 2px 8px 4px #e5e5e5;
  }
`;

Card.displayName = "Card";

export const Content = styled.div`
  padding: 1rem;
`;

Content.displayName = "Content";
