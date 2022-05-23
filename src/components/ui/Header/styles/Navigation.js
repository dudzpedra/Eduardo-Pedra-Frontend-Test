import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-between;
  a {
    padding: 2rem 1rem;
    transition: .3s ease-in-out;
  }
  a:focus {
    border-bottom: 0.2rem solid rgba(94, 206, 123, 1);
  }
`;
