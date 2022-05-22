import styled from "styled-components";

export const SwatchListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
SwatchListWrapper.displayName = 'SwatchListWrapper'

export const SwatchContentWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.selected && '1px solid rgba(94, 206, 123, 1)'};
`

SwatchContentWrapper.displayName = 'SwatchContentWrapper'