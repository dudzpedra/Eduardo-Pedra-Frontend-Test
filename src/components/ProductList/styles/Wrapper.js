import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem 2rem;
  &::after {
    content: '';
    flex: auto;
  }
`

ListWrapper.displayName = 'ListWrapper'