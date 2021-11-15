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
      <a href="https://github.com/mvfernandes/todo-app-react-native/blob/main/app-release.apk?raw=true" target="_blank">Baixar app android</a>

      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}
