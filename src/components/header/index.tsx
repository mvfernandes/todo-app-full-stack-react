import { Container } from './styles';

export function Header() {
  function handleLogout() {
    localStorage.removeItem('myKey');
    window.location.replace('/');
  }
  return (
    <Container>
      <h2>Todo App</h2>
      <p>App para gerenciamento de tarefas do dia a dia</p>

      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}
