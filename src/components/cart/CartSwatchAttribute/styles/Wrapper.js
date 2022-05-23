import styled from "styled-components";

export const SwatchListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
`
SwatchListWrapper.displayName = 'SwatchListWrapper'

export const SwatchContentWrapper = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.selected && '1px solid rgba(94, 206, 123, 1)'};
`

SwatchContentWrapper.displayName = 'SwatchContentWrapper'