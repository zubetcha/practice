import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/modules/todos';

import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { useNavigate } from '../hooks/useNavigate';
import { useTodos } from '../context/todo';

import { TodoItem, StyledTodoButton } from '../components/TodoItem';
import { Input } from '../components/Input';

export default function Home() {
  const navigate = useNavigate();
  const { todos, setTodos } = useTodos();

  console.log(todos);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: '', desc: '' });
  const [buttonState, setButtonState] = useState('disable');

  const todoList = useSelector((module) => module.todos.todos);

  const _getTodosByIsDone = (todos, isDone) => {
    return todos.filter((todo) => todo.isDone === isDone);
  };

  const workingTodos = _getTodosByIsDone(todoList, false);
  const doneTodos = _getTodosByIsDone(todoList, true);

  const onClickAdd = () => {
    const { title, desc } = inputValue;
    const todo = {
      id: uuidv4(), // 고유한 값
      title: title,
      desc: desc,
      isDone: false,
    };

    if (title === '' || desc === '') return;

    dispatch(addTodo(todo));

    setTodos([...todos, todo]);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    if (!inputValue.desc || !inputValue.title) {
      setButtonState('disable');
    }
    if (inputValue.desc && inputValue.title) {
      setButtonState('default');
    }
  }, [inputValue]);

  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledHeader>My Todo List</StyledHeader>
          <div style={{ margin: '96px 0 0 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '24px 0',
              }}
            >
              <div className='input-wrapper'>
                <Input name='title' label='제목' onChange={onChange} />
                <Input name='desc' label='내용' onChange={onChange} />
              </div>
              <StyledTodoButton buttonState={buttonState} onClick={onClickAdd}>
                추가하기
              </StyledTodoButton>
              <button onClick={() => navigate('/context')}>이동하기</button>
            </div>
            <div className='todos-container'>
              <div className='todos-wrapper'>
                <StyledText>🔥working🔥</StyledText>
                <div className='todos-list'>
                  {/* TODO */}
                  {workingTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                  })}
                </div>
              </div>
              <div className='todos-wrapper'>
                <StyledText>✨done✨</StyledText>
                <div className='todos-list'>
                  {/* TODO */}
                  {doneTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
      background-color: #f5f5f5;
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
`;

const StyledHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  border-bottom: 1px solid #333;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
`;
