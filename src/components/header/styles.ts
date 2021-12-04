import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2,
  p {
    margin: 0.25rem 0;
    text-align: center;
  }

  button {
    padding: 0.4rem;
    border-radius: 4px;
  }
  button.btn-logout {
    background: #ff0000;
  }
`;
