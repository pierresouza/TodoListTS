import styled from "styled-components";

export const Container = styled.div`
  .container {
    width: 50vw;
    height: 40px;
    display: flex;
    padding-left: 16px;
  }

  header {
    display: flex;
    align-items: center;
    width: 100%;

    img{
      padding-top: 10px;
    }

    h1 {
      padding-left: 20px;
    }
  }

  .filter {
    padding: 16px;

    select {
      background: #ffffff;
      box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
      border-radius: 5px 5px 0px 0px;
      border: 0;
      outline: 0;
      text-align: right;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";

      select > option{
        border: 0;
      }
    }
  }
`;
