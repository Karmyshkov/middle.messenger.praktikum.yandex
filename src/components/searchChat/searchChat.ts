import Block from "core/Block";
import "./searchChat.css";
import search from "img/search.svg";

export class SearchChat extends Block {
  protected render(): string {
    // language=hbs
    return `
      <form class="search-chat page__search-chat">
        <label class="search-chat__label">
          <input class="search-chat__input" type="text" placeholder="Поиск" />
          <img class="search-chat__img" src="${search}" alt="Поиск по чату" />
        </label>
      </form>
    `;
  }
}
