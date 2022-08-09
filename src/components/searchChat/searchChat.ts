import { Block } from 'core';
import './searchChat.css';
import { SearchChatProps } from './types';
import search from 'img/search.svg';
import { config, Popup } from 'utils';

export class SearchChat extends Block {
  static componentName = 'SearchChat';
  constructor({ onSearchByChats }: SearchChatProps) {
    super({ onSearchByChats });
  }
  protected getStateFromProps() {
    this.state = {
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        new Popup(
          config.popupAddChatSelector,
          config.addChatBtnSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
    };
  }
  protected render(): string {
    // language=hbs
    return `
      <form class="search-chat page__search-chat">
        <label class="search-chat__label">
          {{{InputChat onInput=onSearchByChats}}}
          <img class="search-chat__img" src="${search}" alt="Поиск по чату" />
        </label>
        {{{Button
          onClick=hendleSubmitForm
          type="button"
          classes="search-chat__btn"
        }}}
      </form>
    `;
  }
}
