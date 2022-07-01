import { BlockClass, props } from 'types';
import renderDOM from './renderDOM';
import Block from 'core/Block';
import { isEqual } from 'utils';
import { REGEXP_REPLACE_PATHNAME, REGEXP_REPLACE_ID } from 'utils/constants';

export class Route<P = any> {
  private pathname: string;
  private blockClass: BlockClass<P>;
  private block: Block | null = null;
  private props: props;
  private isPrefixId: boolean | undefined;

  constructor(pathname: string, view: BlockClass<P>, props: props) {
    this.isPrefixId = pathname.includes(':id');
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
    if (this.isPrefixId) {
      pathname = pathname.replace(REGEXP_REPLACE_PATHNAME, '');
    }
    return isEqual(pathname, this.pathname);
  }
  private prefixHandler() {
    const id = Number(window.location.pathname.replace(REGEXP_REPLACE_ID, ''));
    return { id };
  }
  render() {
    const { id } = this.prefixHandler();
    if (!this.block) {
      this.block = new this.blockClass({ ...this.props, idPath: id });
      renderDOM(this.block);
      return;
    }

    this.block.setProps({ idPath: id });
    this.block.show();
  }
}
