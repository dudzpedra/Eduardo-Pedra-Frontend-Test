import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem 3.5rem;
  width: 100%;
  &::after {
    content: "";
    flex: auto;
  }
`

ListWrapper.displayName = 'ListWrapper'