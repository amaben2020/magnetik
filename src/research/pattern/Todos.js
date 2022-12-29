// https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/#function-as-a-children-render-prop

function TodoList({ todos, children }) {
  return (
    <section className='main-section'>
      <ul className='todo-list'>
        {todos.map((todo, i) => (
          <li key={i}>{children(todo)}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const todos = [
    { label: 'Write tests', status: 'done' },
    { label: 'Sent report', status: 'progress' },
    { label: 'Answer emails', status: 'done' },
  ];
  const isCompleted = (todo) => todo.status === 'done';
  return (
    <TodoList todos={todos}>
      {(todo) => (isCompleted(todo) ? <b>{todo.label}</b> : todo.label)}
    </TodoList>
  );
}
