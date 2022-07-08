import { HTTPTransport } from 'utils/classes/HTTPTransport';
import { NOT_IMPLEMENTED_ERROR } from 'utils/constants';

export abstract class BaseAPI {
  _http: HTTPTransport;
  _baseUrl: string;
  _headers: Record<string, string>;
  constructor({ path }: Record<string, string>) {
    this._http = new HTTPTransport();
    this._baseUrl = `https://ya-praktikum.tech/api/v2${path}`;
    this._headers = { 'Content-Type': 'application/json' };
  }

  post(url: string, data: any) {
    return this._http.post(`${this._baseUrl}/${url}`, { data, headers: this._headers });
  }

  get() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }

  put() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }

  delete() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }
}
