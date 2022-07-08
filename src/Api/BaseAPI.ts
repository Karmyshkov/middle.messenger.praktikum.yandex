import { NOT_IMPLEMENTED_ERROR } from 'utils/constants';

export class BaseAPI {
  create() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }

  request() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }

  update() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }

  delete() {
    throw new Error(NOT_IMPLEMENTED_ERROR);
  }
}
