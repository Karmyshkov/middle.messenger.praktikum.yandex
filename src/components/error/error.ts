import { Block } from 'core';
import './error.css';
import { ErrorProps } from './types';

export class Error extends Block {
  static componentName = 'Error';
  constructor({ title, subtitle, onClick }: ErrorProps) {
    super({ title, subtitle, events: { click: onClick } });
  }
  protected getStateFromProps(props: ErrorProps): void {
    this.state = {
      title: props.title,
      subtitle: props.subtitle,
    };
  }
  protected render(): string {
    const { title, subtitle } = this.state;
    // language=hbs
    return `
      <div class="error">
        <h1 class="error__title">${title}</h1>
        <p class="error__subtitle">${subtitle}</p>
        <button class="error__link" type="button">Назад к чатам</button>
      </div>
    `;
  }
}
