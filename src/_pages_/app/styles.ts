import { CardStyle } from '@/styles/components/card';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(CardStyle)`
  width: 100%;
  max-width: 800px;
  padding: 0;
`;

export const CardHead = styled.header`
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 0 1.5rem;
`;

export const CardContent = styled.div`
  width: 100%;
  background: #fff;
  max-height: 500px;
  overflow-y: scroll;
`;

export const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  border-top: solid 0.5px #00000026;
  input[type='checkbox'] {
    cursor: pointer;
  }
  .text {
    margin-left: 0.75rem;
    width: 100%;
  }

  .done {
    text-decoration: line-through;
  }
`;

export const TaskItemText = styled.span<{ done: boolean }>`
  margin-left: 0.75rem;
  width: 100%;
  ${({ done }) =>
    !!done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Trash = styled.i.attrs({
  className: 'bi bi-trash',
})`
  color: #ff0000;
  cursor: pointer;
  font-size: 1.25rem;
`;

export const CardFooter = styled.footer`
  border-top: solid 0.5px #00000026;
  width: 100%;
  border-radius: 0 0 6px 6px;
  padding: 0.35rem;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;

  .input {
    position: relative;
    display: block;
    input {
      width: 100%;
    }
    display: flex;
    flex: 1;
    margin-right: 1rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    button {
      width: 100%;
    }
    .input {
      margin-right: 0;
    }
  }
`;

export const Clean = styled.i.attrs({
  className: 'bi bi-x',
})`
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  height: auto;
  align-self: center;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  padding: 0.5rem 1.5rem
`;
