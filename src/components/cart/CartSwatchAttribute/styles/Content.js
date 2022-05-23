import styled from "styled-components";

export const SwatchContent = styled.div`
  width: 16px;
  height: 16px;
  background: ${props => props.displayColor};
  border: ${props => props.displayColor === '#FFFFFF' && '1px solid #000'};
`
SwatchContent.displayName = 'SwatchContent'