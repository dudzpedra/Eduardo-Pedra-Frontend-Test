import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2rem;
  &::after {
    content: '';
    flex: auto;
  }
`

ListWrapper.displayName = 'ListWrapper'