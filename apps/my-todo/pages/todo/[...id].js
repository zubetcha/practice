import { useState, useRef, useEffect } from 'react';
import { Input } from '../../components/Input';
import { TodoItem } from '../../components/TodoItem';
import { useSelector } from 'react-redux';
import { useLocation } from '../../hooks/useLocation';
import { useCallback } from 'react';

const TodoDetailPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { todos } = useSelector(({ todos }) => todos);
  const _todo = todos.find((todo) => todo.id === id);

  const [todo, setTodo] = useState(_todo);
  const todoRef = useRef(_todo);

  const onChange = (e) => {
    const { name, value } = e.target;
    // setTodo({ ...todo, [name]: value });
    // console.log('todo', todo);

    todoRef.current = { ...todoRef.current, [name]: value };
  };
  // console.log('todo', todo);

  const onClick = () => {};

  return (
    <>
      <div style={{ width: 'fit-content', height: '2000px' }}>
        {/* <TodoItem {...todo} /> */}
        <div style={{ display: 'flex' }}>
          <Input name='title' label='제목' onChange={onChange} />
          <Input name='desc' label='내용' onChange={onChange} />
          <button onClick={onClick}>수정하기</button>
        </div>
      </div>
    </>
  );
};

export default TodoDetailPage;
