import styled from "styled-components";

export const LiProduct = styled.li`
  border: 2px solid rgb(var(--grey-20));
  border-radius: 5px;
  width: 300px;
  height: 346px;

  figure {
    width: 100%;
    height: 162px;
    background-color: rgb(var(--grey-0));
    margin-bottom: 26px;

    img {
      height: 100%;
    }
  }
`;

export const ContainerInfoProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding-left: 21px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: rgb(var(--grey-100));
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(var(--grey-50));
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: rgb(var(--color-primary));
  }

  button {
    width: 106px;
    height: 40px;
    background-color: rgb(var(--color-primary));
    border: 2px solid rgb(var(--color-primary));
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgb(var(--color-white));
  }
`;
