import { HTTPTransport } from 'utils/classes';
import { BASE_URL, BASE_HEADERS } from 'utils/constants';

export abstract class BaseAPI {
  _http: HTTPTransport;
  _baseUrl: string;
  _headers: Record<string, string>;
  constructor({ path }: Record<string, string>) {
    this._http = new HTTPTransport();
    this._baseUrl = `${BASE_URL}${path}`;
    this._headers = BASE_HEADERS;
  }

  post(url: string, data: unknown) {
    return this._http.post(`${this._baseUrl}/${url}`, { data, headers: this._headers });
  }

  get(url: string) {
    return this._http.get(`${this._baseUrl}/${url}`, { headers: this._headers });
  }

  put() {}

  delete() {}
}
