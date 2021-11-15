import { Header } from '@/components/header';
import { withLogged } from '@/hocs/withLogged';
import { Card, Container, CardHead, CardFooter, CardContent, TaskItem, TaskItemText, Trash, Clean } from './styles';
import useAppController from './useAppController';

function App() {
  const { todos, todo, setTodo, submitAddTodo, toggleDone, removeTodo } = useAppController();

  return (
    <>
      <Header />
      <Container>
        <Card>
          <CardHead>
            <h3>
              <i className="bi bi-list"></i> Lista de Tarefas
            </h3>
          </CardHead>
          <CardContent>
            {todos.map((todo) => (
              <TaskItem key={todo.id}>
                <input type="checkbox" defaultChecked={todo?.done} readOnly onClick={() => toggleDone(todo)} />
                <TaskItemText done={!!todo.done}>{todo.todo}</TaskItemText>
                <span onClick={() => removeTodo(todo)}>
                  <Trash />
                </span>
              </TaskItem>
            ))}
          </CardContent>
          <form onSubmit={submitAddTodo}>
            <CardFooter>
              <div className="input">
                <input
                  type="text"
                  placeholder="Qual é a nova tarefa?"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <Clean onClick={() => setTodo('')} />
              </div>
              <div>
                <button type="submit">Adicionar nova tarefa</button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </Container>
    </>
  );
}

export default withLogged(App);
