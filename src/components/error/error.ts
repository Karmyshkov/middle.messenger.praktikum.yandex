import Block from 'core/Block';
import './error.css';
import { ErrorProps } from './types';

export class Error extends Block {
  constructor({ title, subtitle }: ErrorProps) {
    super({ title, subtitle });
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="error">
        <h1 class="error__title">{{title}}</h1>
        <p class="error__subtitle">{{subtitle}}</p>
        <a class="error__link" href="/">Назад к чатам</a>
      </div>
    `;
  }
}
