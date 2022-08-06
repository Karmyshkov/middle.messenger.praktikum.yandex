enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type RequestData = Record<string, string | number>;

type RequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: unknown;
  withCredentials?: boolean;
};

function queryStringify(data: RequestData) {
  if (!data) {
    return '';
  }
  return Object.entries(data).reduce(
    (acc, [key, value], index, arr) =>
      `${acc}${key}=${value}${index < arr.length - 1 ? '&' : ''}`,
    '?'
  );
}

export class HTTPTransport {
  public get = (url: string, options = {}) =>
    this.request(url, { ...options, method: METHODS.GET });

  public post = (url: string, options = {}) =>
    this.request(url, { ...options, method: METHODS.POST });

  public put = (url: string, options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT });

  public patch = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PATCH });
  };

  public delete = (url: string, options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE });

  private request = (url: string, options: RequestOptions) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000,
      withCredentials = true,
    } = options;

    const query = method === METHODS.GET ? queryStringify(data as RequestData) : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${url}${query}`);

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));

      xhr.onload = () => (xhr.status >= 300 ? reject(xhr) : resolve(xhr));

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (data?.constructor.name === 'FormData') {
        xhr.send(data);
      } else {
        method === METHODS.GET || !data ? xhr.send() : xhr.send(JSON.stringify(data));
      }
    });
  };
}
