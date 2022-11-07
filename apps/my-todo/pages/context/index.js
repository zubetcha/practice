import { useTodos } from '../../context/todo';

export default function ContextPage() {
  const { todos } = useTodos();
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h1>{todo.desc}</h1>
          </div>
        );
      })}
    </div>
  );
}
