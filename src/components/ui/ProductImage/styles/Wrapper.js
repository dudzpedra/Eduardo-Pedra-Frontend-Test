import styled from "styled-components";

export const ProductImageWrapper = styled.div`
  width: 60%;
  height: 80vh;
  display: flex;
  justify-content: center;
  position: relative;
  filter: opacity(${(props) => (props.inStock ? "100%" : "60%")});
`

ProductImageWrapper.displayName = 'ProductImageWrapper'