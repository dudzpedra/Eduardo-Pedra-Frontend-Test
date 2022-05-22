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

  &:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
  /* 
  &:active {
    background: #000;
    color: #fff;
  } */
`

AttributeContent.displayName = 'AttributeContent'