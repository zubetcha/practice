
import { TodoItem } from "../../components/TodoItem";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const TodoDetailPage = () => {
  const id = useRouter().asPath.split("/")[2];;

  const { todos } = useSelector(({ todos }) => todos);
  const todo = todos.find((todo) => todo.id === id);

  return (
    <div style={{ width: "480px", position: "fixed", left: "50%", transform: "translateX(-50%)"}}>
      <TodoItem {...todo} />
    </div>
  );
}

export default TodoDetailPage