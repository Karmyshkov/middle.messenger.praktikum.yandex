import { Block } from 'core';
import './authLink.css';
import { AuthLinkProps } from './types';

export class AuthLink extends Block {
  static componentName = 'AuthLink';
  constructor({ text, onClick }: AuthLinkProps) {
    super({ text, events: { click: onClick } });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      text: props.text,
    };
  }
  protected render(): string {
    const { text } = this.state;
    // language=hbs
    return `
      <Button class="auth-link" type="button">${text}</Button>
    `;
  }
}
