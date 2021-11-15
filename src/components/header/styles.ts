import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2,
  p {
    margin: 0.25rem 0;
    text-align: center;
  }

  a {
    border: solid 1px;
    padding: 5px;
    border-radius: 4px;
  }

  button {
    margin-top: 2rem;
  }
`;
