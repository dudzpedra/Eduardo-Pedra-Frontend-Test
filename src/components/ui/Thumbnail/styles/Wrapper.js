import styled from "styled-components";

export const ThumbnailWrapper = styled.img`
  width: 40%;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }
`;

ThumbnailWrapper.displayName = "ThumbnailWrapper";
