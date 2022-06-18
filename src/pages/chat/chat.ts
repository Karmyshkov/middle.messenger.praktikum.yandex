import Block from "core/Block";
import "./chat.css";

import right_arrow from "img/right-arrow.svg";
import chats from "data/chats.json";
import { ChatType } from "types";

interface ChatPageProps {}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super({ ...props });
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
                  }}}`
                )
                .join("")}
            </ul>
          </li>
          <li class="chat__column chat__column-default">
            <h2 class="chat__title">Выберите чат чтобы отправить сообщение</h2>
          </li>
        </ul>
      </div>
    `;
  }
}
