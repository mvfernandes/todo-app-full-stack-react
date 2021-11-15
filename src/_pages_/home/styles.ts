import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 400px;

    input,
    button {
      width: 100%;
    }

    footer {
      color: #d71515ed;
    }
  }
`;
