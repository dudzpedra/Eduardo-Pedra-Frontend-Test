import styled from "styled-components";

export const ColorContent = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.displayColor};
  border: ${(props) => props.displayColor === "#FFFFFF" && "1px solid #000"};
`;
ColorContent.displayName = "ColorContent";
