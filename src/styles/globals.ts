import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  background: #6a0ce4;
  color: #fff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  transition: all ease 0.1s;
}


  input {
    font-size: 1rem;
    border: none;
    border-radius: 3px;
    padding: 0.75rem;
    width: inherit;
    margin: 0.25rem 0;
    outline: none;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
    background-color: #007cf9;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 0.7rem 2rem;
    width: inherit;
    margin: 0.25rem 0;

    &:hover {
      transform: scale(1.01);
    }
    &:active {
      transform: scale(1.03);
    }
  }

`;
