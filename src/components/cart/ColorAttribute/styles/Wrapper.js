import styled from "styled-components";

export const ColorListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const ColorWrapper = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.selected && '2px solid rgba(94, 206, 123, 1)'};
  cursor: pointer;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .5s;

  &:hover {
    border: 2px solid rgba(94, 206, 123, 1);
  }
`;

ColorListWrapper.displayName = "ColorListWrapper";
