import { createAction, handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

/* action type */

const ADD_TODO = "todo/ADD";
const GET_TODO_BY_ID = "todo/GET";
const DELETE_TODO = "todo/DELETE";
const TOGGLE_TODO = "todo/TOGGLE";

/* action creator */

export const addTodo = createAction(ADD_TODO, (payload) => payload);
export const getTodoById = createAction(GET_TODO_BY_ID, (payload) => payload);
export const deleteTodo = createAction(DELETE_TODO, (payload) => payload);
export const toggleTodo = createAction(TOGGLE_TODO, (payload) => payload);

/* initial state */

const initialState = {
  todos: new Array(4)
    .fill({ id: null, title: "", desc: "", isDone: false })
    .map((el, i) => {
      return {
        ...el,
        id: uuidv4(),
        title: `title${i}`,
        desc: `desc${i}`,
      };
    }),
};

/* reducer */

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
