import Block from "core/Block";
import "./chat.css";
import right_arrow from "img/right-arrow.svg";

interface ChatPageProps {}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <ul class="chat">
        <li class="chat__column chat__column_left">
          <a class="chat__link-profile page__link-profile" href="/profile">
            <span class="chat__link-text">Профиль</span>
            <img class="chat__link-img" src="${right_arrow}" alt="Перейти к профилю пользователя">
          </a>

          <ul class="chat__list">

          </ul>
        </li>
      </ul>
    `;
  }
}

// <ul class="chat">
//         <li class="chat__column chat__column_left">
//           <a class="chat__link-profile page__link-profile" href="./profile.hbs">
//             <span class="chat__link-text">Профиль</span>
//             <img class="chat__link-img" src="../image/right-arrow.svg" alt="Перейти к профилю пользователя">
//           </a>
//           {{> searchChat/searchChat}}
//           <ul class="chat__list">
//             {{#each chats.payload}}
//               {{> listItem/listItem this=this }}
//             {{/each}}
//           </ul>
//         </li>
//         <li class="chat__column chat__column-default">
//           <h2 class="chat__title">Выберите чат чтобы отправить сообщение</h2>
//         </li>
//         <li class="chat__column chat__column-dialog chat__column_is-hidden">
//           <div class="chat__header">
//             <div class="chat__inner">
//               {{> avatar/avatar srcAvatar="https://4tololo.ru/sites/default/files/images/20151308202253.jpg?itok=XZXWgPTt" userName="Вадим"}}
//               <p class="chat__user-name">Вадим</p>
//             </div>
//             {{> burgerMenu/burgerMenu}}
//           </div>
//           <p class="chat__text-date">19 июня</p>
//           <ul class="chat__messages">
//             {{#each messages.payload}}
//               {{> message/message this=this }}
//             {{/each}}
//           </ul>
//           {{> chatFooter/chatFooter}}
//         </li>
//         {{> menu/menu isUser=true }}
//         {{> menu/menu isUser=false }}
//         {{> popup/popup title="Добавить пользователя" helperText="Логин" textBtn="Добавить" classesPopup="popup_add-user" classesForm="popup__form_add-user" isDefault=true}}
//         {{> popup/popup title="Удалить пользователя" helperText="Логин" textBtn="Удалить" classesPopup="popup_delete-user"classesForm="popup__form_delete-user" isDefault=true}}
//       </ul>
