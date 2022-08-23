import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "../hooks/useNavigate";

export const TodoItem = ({ id, title, desc, isDone }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // TODO: onClickDelete 함수 만들기
  const onClickDelete = () => {

  };

  // TODO: onClickToggle 함수 만들기
  const onClickToggle = () => {

  };

  const onClickDetail = () => {
    navigate(`/todo/${id}`)
  }

  return (
    <StyledTodoContainer>
      <div className="contents-wrapper">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <div className="buttons-wrapper">
        <StyledTodoButton isDelete>
          삭제
        </StyledTodoButton>
        <StyledTodoButton isDone>
          {/* TODO todo 상태에 따라 다른 텍스트 보여주기 */}
          완료
        </StyledTodoButton>
        <StyledTodoButton onClick={onClickDetail}>상세</StyledTodoButton>
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
    column-gap: 8px;
    justify-content: flex-end;
  }
`;

export const StyledTodoButton = styled.button`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ isDelete, isAdd, isDone }) =>
    isDelete ? "#E0E0E0" : isAdd ? "#3D5AFE" : isDone ? "#546E7A" : "#37474F"};
  color: ${({ isDelete }) => (isDelete ? "#333" : "#FAFAFA")};
  font-weight: 500;
  font-size: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isDelete, isAdd, isDone }) =>
      isDelete
        ? "#EEEEEE"
        : isAdd
        ? "#536DFE"
        : isDone
        ? "#607D8B"
        : "#455A64"};
  }
`;
