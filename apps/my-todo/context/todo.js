import { createContext, useContext, useState } from 'react';

// TODO: initialState 만들기
const todosDefaultValue = {
  todos: [],
  setTodos: null,
  addTodo: null,
};

// TODO: initialState로 Context 만들기
const TodosContext = createContext(todosDefaultValue);

// TODO: todoList 상태를 가져올 수 있는 커스텀훅 만들기 (optional)
export const useTodos = () => useContext(TodosContext);

// TODO: 전역으로 상태를 전달해주는 Provider 만들기

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>{children}</TodosContext.Provider>;
};
