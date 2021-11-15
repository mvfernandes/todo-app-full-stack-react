import { FunctionComponent } from 'react';

export const withLogged =
  (Component: FunctionComponent) =>
  ({ ...props }) => {
    if (typeof localStorage !== 'undefined') {
      const key = localStorage.getItem('myKey');
      if (!key?.trim()) {
        if (window.location.pathname !== '/') {
          window.location.replace('/');
        }
      }
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };
