import { CardStyle } from '@/styles/components/card';
import { Container } from './styles';
import useHomeController from './useHomeController';

export default function Home() {
  const { key, message, setKey, submitForm } = useHomeController();
  return (
    <Container>
      <form className="card" onSubmit={submitForm}>
        <CardStyle>
          <div>
            <input
              type="text"
              placeholder="Type your secret key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" disabled={!key} title={key ? 'Submit form' : 'Type an key'}>
              Submit
            </button>
          </div>
          <footer>{message}</footer>
        </CardStyle>
      </form>
    </Container>
  );
}
