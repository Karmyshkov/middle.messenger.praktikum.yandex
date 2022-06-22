import Block from 'core/Block';
import './searchChat.css';
import { SearchChatProps } from './types';
import search from 'img/search.svg';

export class SearchChat extends Block {
  constructor({ onSearchByChats }: SearchChatProps) {
    super({ onSearchByChats });
  }
  protected render(): string {
    // language=hbs
    return `
      <form class="search-chat page__search-chat">
        <label class="search-chat__label">
          {{{InputChat onInput=onSearchByChats}}}
          <img class="search-chat__img" src="${search}" alt="Поиск по чату" />
        </label>
      </form>
    `;
  }
}
