import Block from 'core/Block';
import './inputChat.css';
import { InputChatProps } from './types';

export class InputChat extends Block {
  constructor({ placeholder = 'Поиск' }: InputChatProps) {
    super({ placeholder });
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
