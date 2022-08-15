import { Block } from 'core';
import './inputChat.css';
import { InputChatProps } from './types';

export class InputChat extends Block {
  static componentName = 'InputChat';

  constructor({ onInput, placeholder = 'Поиск', ...rest }: InputChatProps) {
    super({ events: { input: onInput }, placeholder, ...rest });
  }
  protected getStateFromProps(props: InputChatProps): void {
    this.state = {
      placeholder: props.placeholder,
    };
  }

  protected render(): string {
    // language=hbs
    return `<input class="input-chat" type="text" placeholder="${this.state.placeholder}" />`;
  }
}
