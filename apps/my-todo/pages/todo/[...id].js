
import { TodoItem } from "../../components/TodoItem";
import { useSelector } from "react-redux";
import { useLocation } from "../../hooks/useLocation";

const TodoDetailPage = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];

  const { todos } = useSelector(({ todos }) => todos);
  const todo = todos.find((todo) => todo.id === id);

  return (
    <div style={{ width: "480px", position: "fixed", left: "50%", transform: "translateX(-50%)"}}>
      <TodoItem {...todo} />
    </div>
  );
}

export default TodoDetailPage