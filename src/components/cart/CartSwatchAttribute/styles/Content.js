import styled from "styled-components";

export const SwatchContent = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${props => props.displayColor};
  border: ${props => props.displayColor === '#FFFFFF' && '1px solid #000'};
`
SwatchContent.displayName = 'SwatchContent'