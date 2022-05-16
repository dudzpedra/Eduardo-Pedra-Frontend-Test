import styled from "styled-components";

export const Card = styled.div`
  width: 386px;
  cursor: pointer;
  margin: 1rem 1rem 1rem 0;
  display: flex;
  flex-direction: column;;
  &:hover {
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  }
`;

Card.displayName = "Card";

export const Content = styled.div`
  padding: 1rem;
`;

Content.displayName = "Content";
