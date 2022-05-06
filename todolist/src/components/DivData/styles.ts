import styled from "styled-components";

export const Container = styled.div`
display: flex;
  margin-top: 20px;
  padding: 8px;
  display: flex;

  .todo-container {
    width: 100%;

    .todo-list {
      margin-bottom: 20px;
      display: flex;
      width: 100%;
      padding-left: 8px;

      ul {
        display: flex;
        padding: 8px;
        width: 100%;
        li{
          display: flex;
          width: 100%;
          padding-left: 32px;
        }
        &:hover {
          transition: all 0.5s;
          transform: scale(1.03);
          background: #ffffff;
          box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
          border-radius: 5px;
        }

        .checkbtn {
          color: #3d82eb;
          border: 0;
          background: white;
          cursor: pointer;
        }
        .deletebtn {
          color: #dc143c;
          border: 0;
          background: white;
          cursor: pointer;
        }
        
      }
    }

    .container-new-item {
      display: flex;
      padding-left: 14px;

      .addbutton {
        border: 0;
        margin-right: 20px;
        background: white;
        cursor: pointer;
      }

      input {
        padding-left: 8px;
        border: 0;
        &::placeholder {
          color: #3d82eb;
        }
      }
    }
  }
 
`;
