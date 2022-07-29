import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 139px;
  background-color: rgb(var(--grey-0));
  padding: 0 7vw;
  margin-bottom: 32px;

  .containerSearchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 365px;
    max-width: 365px;
    min-width: 90vw;
    height: 90px;
    padding: 10px 21px;
    background-color: rgb(var(--color-white));
    border: 2px solid rgb(var(--grey-20));
    border-radius: 8px;

    input {
      width: 70%;
    }

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
      width: 30%;
      min-width: 71px;
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

  @media screen and (min-width: 631px) {
    & {
      flex-wrap: nowrap;
      justify-content: space-between;
      height: 80px;
    }

    .containerSearchBar {
      min-width: 365px;
    }
  }

  @media screen and (min-width: 327px) {
    .containerSearchBar {
      flex-wrap: nowrap;
      justify-content: space-between;
      height: 60px;
    }
  }
`;
