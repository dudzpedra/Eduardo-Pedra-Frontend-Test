import styled from "styled-components";

export const AttributeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  border: 1px solid;
  margin-right: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background: #ccc;
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