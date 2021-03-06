import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;

  .todo-container {
    width: 100%;
    padding-top: 16px;

    .todo-list-items {
      min-width: 30%;
      width: 50vw;
      ul {
        list-style: none;

        li {
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          display: flex;
          font-weight: 400;
          transition: all 0.3s ease-in-out;

          .left {
            flex: 1;
            display: flex;
            align-items: center;
          }

          &:hover {
            transform: scale(1.02);
            background: #ffffff;
            box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
          }

          .checkbtn {
            height: 1.5rem;
            width: 1.5rem;
            margin: 0 2rem 0 0.5rem;
            cursor: pointer;
            border-radius: 50%;
          }
          .deletebtn {
            color: #dc143c;
            border: 0;
            background: white;
            cursor: pointer;
          }
          button {
            border: 0;
            outline-color: 0;
            background-color: #ffffff;
            transition: all 0.3s ease-in-out;
            &:hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }
`;
export const NewItem = styled.div`
  display: flex;
  padding-left: 1.5rem;

  .addbutton {
    border: 0;
    margin-right: 1.25rem;
    background: white;
    cursor: pointer;
  }

  input {
    padding-left: 1rem;
    border: 0;
    outline: 0;

    &::placeholder {
      color: #3d82eb;
    }
  }
`;
