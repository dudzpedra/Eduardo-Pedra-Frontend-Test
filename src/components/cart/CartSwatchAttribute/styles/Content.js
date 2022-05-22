import styled from "styled-components";

export const SwatchContent = styled.div`
  width: 16px;
  height: 16px;
  background: ${props => props.displayColor};
  border: ${props => props.selected && '1px solid'};
`
SwatchContent.displayName = 'SwatchContent'