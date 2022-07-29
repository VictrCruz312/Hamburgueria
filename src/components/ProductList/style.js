import styled from "styled-components";

export const ListProducts = styled.ul`
  max-width: 940px;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: scroll;
  background-color: rgb(var(--color-white));

  @media screen and (min-width: 1152px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
