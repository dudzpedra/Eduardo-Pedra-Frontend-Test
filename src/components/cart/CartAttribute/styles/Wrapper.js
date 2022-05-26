import styled from "styled-components";

export const AttributeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
AttributeListWrapper.displayName = 'AttributeListWrapper'

export const AttributeContentWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: ${props => props.selected ? '#000' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#000'};
`

AttributeContentWrapper.displayName = 'AttributeContentWrapper'