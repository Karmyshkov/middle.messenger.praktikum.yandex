import { Block } from 'core';
import './message.css';
import { MessageProps } from 'types';

export class Message extends Block {
  static componentName = 'Message';
  constructor({ owner, content, time, isRead }: MessageProps) {
    super({ owner, content, time, isRead });
  }
  protected getStateFromProps(props: MessageProps): void {
    this.state = {
      owner: props.owner,
      content: props.content,
      time: props.time,
      isRead: props.isRead,
    };
  }
  protected render(): string {
    const { owner, content, time, srcImg, isRead } = this.state;

    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const classesForTitle = `${
      !owner ? 'message_is-not-owner' : srcImg ? 'message_is-img' : ''
    }`;
    const classesForText = `${owner ? 'message__text_is-me' : 'message__text_is-friend'}`;
    const classesForTime = `${
      isRead ? 'message__time_is-read' : 'message__time_is-not-read'
    }`;
    // language=hbs
    return `
      <li class="message ${classesForTitle}">
          <p class="message__text ${classesForText}">
            ${content}
            ${
              owner
                ? `<time class="message__time">${hours}:${minutes}</time>`
                : `<time class="message__time ${classesForTime}">${hours}:${minutes}</time>`
            }
          </p>
      </li>
    `;
  }
}
