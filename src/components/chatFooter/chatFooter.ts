import { Block } from 'core';
import './chatFooter.css';
import { ChatFooterProps } from './types';
import attachBtn from 'img/attach-btn.svg';
import sendBtn from 'img/send-btn.svg';

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';
  constructor({ onSubmit, onClick }: ChatFooterProps) {
    super({ events: { submit: onSubmit, click: onClick } });
  }
  protected render(): string {
    // language=hbs
    return `
      <div class="chat-footer">
        <form class="chat-footer__form">
          <button class="chat-footer__btn-attach" type="button" aria-label="Прирепить файл">
            <img
              class="chat-footer__icon-attach"
              src="${attachBtn}"
              alt="Иконка прирепить файл"
            />
          </button>
          <input class="chat-footer__input" type="text" placeholder="Поиск" required />
          <button class="chat-footer__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-footer__icon-send"
              src="${sendBtn}"
              alt="Иконка отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
  }
}
