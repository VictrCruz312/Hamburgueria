import styled from "styled-components";

export const StyleCart = styled.div`
  width: 355px;
  max-width: 365px;
  min-width: 300px;
  border-radius: 5px;
  margin: 0 auto;

  h2 {
    height: 65px;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    background-color: rgb(var(--color-primary));
    border-radius: 5px 5px 0 0;
    color: rgb(var(--color-white));
  }

  .containerCartProducts {
    height: 465px;
    background-color: rgb(var(--grey-0));

    ul {
      padding: 20px 10px;
      height: 323px;
      display: flex;
      flex-direction: column;
      gap: 21px;
      overflow-y: scroll;
      border-bottom: 2px solid rgb(var(--grey-20));

      & > .cartVazio h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
        color: rgb(var(--grey-100));
      }

      & > .cartVazio p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: rgb(var(--grey-50));
      }

      li {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        height: 80px;
        min-height: 80px;
        max-height: 80px;
        align-items: center;

        figure {
          background-color: rgb(var(--grey-20));
          border-radius: 5px;
          padding: 5px;
          img {
            width: 70px;
          }
        }

        .containerListCart {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;

          h3 {
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: rgb(var(--grey-100));
          }

          span {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: rgb(var(--grey-50));
          }

          button {
            align-self: flex-start;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: rgb(var(--grey-50));
            background-color: inherit;
          }
        }
      }
    }
  }
  .containerTotal {
    padding: 14px 10px;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 22px;

      .textValue {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: rgb(var(--grey-100));
      }

      .value {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: rgb(var(--grey-50));
      }
    }

    button {
      width: 100%;
      height: 60px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: rgb(var(--grey-50));
      background: rgb(var(--grey-20));
      border: 2px solid rgb(var(--grey-20));
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 1152px) {
    & {
    }
  }
`;
