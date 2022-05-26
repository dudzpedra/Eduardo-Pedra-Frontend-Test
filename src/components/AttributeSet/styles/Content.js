import styled from "styled-components";

export const AttributeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  border: 1px solid;
  margin-right: 0.5rem;
  padding: 0.5rem;
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) .5s;
  background: ${props => props.selected ? '#000' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#000'};
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`

AttributeContent.displayName = 'AttributeContent'