import Block from 'core/Block';
import './chatFooter.css';

export class ChatFooter extends Block {
  protected render(): string {
    // language=hbs
    return `
      <div class="chat-footer">
        <form class="chat-footer__form">
          <button class="chat-footer__btn-attach" type="button" aria-label="Прирепить файл">
            <img
              class="chat-footer__icon-attach"
              src="../image/attach-btn.svg"
              alt="Иконка прирепить файл"
            />
          </button>
          <input class="chat-footer__input" type="text" placeholder="Поиск" />
          <button class="chat-footer__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-footer__icon-send"
              src="../image/send-btn.svg"
              alt="Иконка отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
  }
}
