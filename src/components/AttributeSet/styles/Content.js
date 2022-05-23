import styled from "styled-components";

export const AttributeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  border: 1px solid;
  margin-right: 0.5rem;
  padding: 0.5rem;
  //transition: .4s ease-in-out;
  background: ${props => props.selected ? '#000' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#000'};
  cursor: pointer;

  /* &:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  } */
  /* 
  &:active {
    background: #000;
    color: #fff;
  } */
`

AttributeContent.displayName = 'AttributeContent'