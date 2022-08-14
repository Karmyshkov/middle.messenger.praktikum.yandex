import { BlockClass, props } from 'types';
import renderDOM from './renderDOM';
import Block from 'core/Block';
import { isEqual } from 'utils';

export class Route<P = any> {
  private pathname: string;
  private blockClass: BlockClass<P>;
  private block: Block | null = null;
  private props: props;

  constructor(pathname: string, view: BlockClass<P>, props: props) {
    this.pathname = pathname.replace('/:id', '');
    this.blockClass = view;
    this.props = props;
  }
  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }
  leave() {
    if (this.block) {
      this.block.hide();
    }
  }
  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({ ...this.props });
      renderDOM(this.block);
      return;
    }

    this.block.show();
  }
}
