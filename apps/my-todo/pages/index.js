import { useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addTodo } from "../store/modules/todos"

import { TodoItem, StyledButton } from "../components/TodoItem"
import { Input } from "../components/Input"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { todos } = useSelector(({todos}) => todos);
  console.log(todos)

  const data = {
    id: "",
    title: "리덕스",
    desc: "안녕",
    isDone: true
  }

  const onClickAdd = () => {
    dispatch(addTodo({...data}))
  }

  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledHeader>My Todo List</StyledHeader>
          <div style={{ margin: "96px 0 0 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "24px 0" }}>
              <div className="input-wrapper">
                <Input name="title" label="제목"/>
                <Input name="desc" label="내용" />
              </div>
              <StyledButton
                isAdd
                onClick={onClickAdd}
              >추가하기</StyledButton>
            </div>
            <div className="todos-container">
              <div className="todos-wrapper">
                <StyledText>🔥working🔥</StyledText>
                <div className="todos-list">

                </div>
              </div>
              <div className="todos-wrapper">
                <StyledText>✨done✨</StyledText>
                <div className="todos-list">
                  <TodoItem {...data} />
                  <TodoItem {...data} />
                  <TodoItem {...data} />
                  <TodoItem {...data} />

                </div>
              </div>
            </div>
          </div>
        </StyledWrapper>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledWrapper = styled.div`
  width: 1000px;
  position: relative;
  height: 100%;

  .input-wrapper {
    display: flex;
    column-gap: 24px;
  }

  .todos-container {
    padding: 24px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    .todos-wrapper {
      padding: 24px;
      background-color: #F5F5F5;
      border-radius: 16px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


      .todos-list {
        padding: 24px 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
    }
  }
`

const StyledHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  border-bottom: 1px solid #333;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
`