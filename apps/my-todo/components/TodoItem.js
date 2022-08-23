import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/modules/todos";

export const TodoItem = ({ id, title, desc, isDone, onClick }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onClickDone = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <StyledTodoContainer onClick={onClick}>
      <div className="contents-wrapper">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <div className="buttons-wrapper">
        <StyledTodoButton isDelete onClick={onClickDelete}>
          삭제하기
        </StyledTodoButton>
        <StyledTodoButton onClick={onClickDone}>
          {isDone ? "취소" : "완료"}
        </StyledTodoButton>
      </div>
    </StyledTodoContainer>
  );
};

const StyledTodoContainer = styled.div`
  height: fit-content;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .contents-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    .title {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .buttons-wrapper {
    display: flex;
    column-gap: 16px;
    justify-content: flex-end;
  }
`;

export const StyledTodoButton = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ isDelete, isAdd }) =>
    isDelete ? "#E0E0E0" : isAdd ? "#3D5AFE" : "#455A64"};
  color: ${({ isDelete }) => (isDelete ? "#333" : "#FAFAFA")};
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isDelete, isAdd }) =>
      isDelete ? "#EEEEEE" : isAdd ? "#536DFE" : "#546E7A"};
  }
`;
