import Block from 'core/Block';
import './chat.css';
import right_arrow from 'img/right-arrow.svg';
import chats from 'data/chats.json';
import messages from 'data/messages.json';
import { ChatType } from 'types';
import { Chat } from 'utils/Chat';
import { config } from 'utils/constants';

export class ChatPage extends Block {
  protected getStateFromProps() {
    this.state = {
      onTest: (evt: Event) => {
        new Chat(config)._addActiveClassName(evt);
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <ul class="chat">
          <li class="chat__column chat__column_left">
            <a class="chat__link-profile page__link-profile" href="/profile">
              <span class="chat__link-text">Профиль</span>
              <img class="chat__link-img" src="${right_arrow}" alt="Перейти к профилю пользователя">
            </a>
            {{{SearchChat}}}
            <ul class="chat__list">
              ${chats.payload
                .map(
                  (chat: ChatType) =>
                    `{{{ListItem
                      userName="${chat.userName}"
                      lastMessage="${chat.lastMessage}"
                      time="${chat.time}"
                      countNotReadMessage="${chat.countNotReadMessage}"
                      srcAvatar="${chat.srcAvatar}"
                      onClick=onTest
                    }}}`
                )
                .join('')}
            </ul>
          </li>
          <li class="chat__column chat__column-default">
            <h2 class="chat__title">Выберите чат чтобы отправить сообщение</h2>
          </li>
          <li class="chat__column chat__column-dialog chat__column_is-hidden">
            <div class="chat__header">
              <div class="chat__inner">
                {{{Avatar srcAvatar="https://4tololo.ru/sites/default/files/images/20151308202253.jpg?itok=XZXWgPTt" userName="Вадим"}}}
                <p class="chat__user-name">Вадим</p>
              </div>
              {{{BurgerMenu}}}
            </div>
            <p class="chat__text-date">19 июня</p>
            <ul class="chat__messages">
              ${messages.payload
                .map(
                  (message: any) =>
                    `{{{Message
                      owner=${message.owner}
                      text="${message.text ? message.text : ''}"
                      time="${message.time}"
                      srcImg="${message.srcImg ? message.srcImg : ''}"
                      isRead=${message.isRead ? true : false}
                    }}}`
                )
                .join('')}
            </ul>
            {{{ChatFooter}}}
          </li>
        </ul>
      </div>
    `;
  }
}
