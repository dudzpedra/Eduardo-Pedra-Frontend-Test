import styled from "styled-components";

export const ImageHover = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .1);
  box-sizing: border-box;
  pointer-events: none;
`

ImageHover.displayName = 'ImageHover'