class Api {
  private req = (method: string, endpoint: string, payload?: object) => {
    const config: RequestInit = {
      headers: {
        Authorization: localStorage.getItem('myKey') || '',
      },
      method,
      body: JSON.stringify(payload || {}),
    };
    if (method === 'get') {
      delete config.body;
    }
    return fetch(endpoint, config).then((res) => {
      const pathName = window.location.pathname;
      if (res.status === 401 && pathName !== '/') {
        window.location.replace('/');
      }
      return res.json();
    });
  };

  get = (endpoint: string) => {
    return this.req('get', endpoint);
  };

  post = (endpoint: string, payload: object) => {
    return this.req('post', endpoint, payload);
  };

  put = (endpoint: string, payload: object) => {
    return this.req('put', endpoint, payload);
  };

  del = (endpoint: string) => {
    return this.req('delete', endpoint);
  };
}

export const api = new Api();
