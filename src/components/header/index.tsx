import { Container } from './styles';

export function Header() {
  function handleLogout() {
    localStorage.removeItem('myKey');
    window.location.replace('/');
  }
  return (
    <Container>
      <button
        onClick={() => {
          window.open(
            'https://github.com/mvfernandes/todo-app-react-native/blob/main/app-release.apk?raw=true',
            '_blank'
          );
        }}
      >
        Baixar app android
      </button>

      <button className="btn-logout" onClick={handleLogout}>Logout</button>
    </Container>
  );
}
