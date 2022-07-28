import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: rgb(var(--grey-0));
  padding: 0 7vw;
  margin-bottom: 32px;

  .containerSearchBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 365px;
    height: 60px;
    max-width: 365px;
    padding: 10px 21px;
    background-color: rgb(var(--color-white));
    border: 2px solid rgb(var(--grey-20));
    border-radius: 8px;

    input::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #e0e0e0;
    }

    input:focus {
      outline: 0;
    }

    button {
      width: 107px;
      height: 40px;
      background: #27ae60;
      border: 2px solid #27ae60;
      border-radius: 8px;
      color: rgb(var(--color-white));
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
