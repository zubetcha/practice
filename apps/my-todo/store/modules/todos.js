import { createAction } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

/* action type */

const ADD_TODO = "todo/ADD";
const DELETE_TODO = "todo/DELETE";
const TOGGLE_TODO = "todo/TOGGLE";

/* action creator */

export const addTodo = createAction(ADD_TODO, (payload) => payload); // todo
export const deleteTodo = createAction(DELETE_TODO, (payload) => payload); // todo id
export const toggleTodo = createAction(TOGGLE_TODO, (payload) => payload); // todo id

/* initial state */

const initialState = {
  todos: new Array(4)
    .fill({ id: null, title: "", desc: "", isDone: false })
    .map((el, i) => {
      return {
        id: uuidv4(),
        title: `title${i}`,
        desc: `desc${i}`,
        isDone: i % 2 === 0 ? true : false,
      };
    }),
};

/* reducer */

const todos = (state = initialState, action) => {
  switch (action.type) {
    // TODO: todo 생성
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };

    // TODO: todo 삭제
    case DELETE_TODO:
      return {
        // Array.filter
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    // TODO: todo 상태 업데이트
    case TOGGLE_TODO:
      return {
        // Array.map
        todos: state.todos.map((todo) => {
          return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        })
      };

    default:
      return state;
  }
};

export default todos;
