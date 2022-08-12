import { Block } from 'core';
import './listItem.css';
import { ListItemProps } from './types';
import { ChatType } from 'types';
import { getDate, DAYS } from 'utils';

export class ListItem extends Block {
  static componentName = 'ListItem';
  constructor({
    id,
    userName,
    lastMessage,
    time,
    countNotReadMessage,
    srcAvatar,
    onClick,
  }: ChatType & ListItemProps) {
    super({
      id,
      userName,
      lastMessage,
      time,
      countNotReadMessage,
      srcAvatar,
      events: { click: onClick },
    });
  }
  protected getStateFromProps(props: ChatType & ListItemProps): void {
    this.state = {
      id: props.id,
      userName: props.userName,
      lastMessage: props.lastMessage,
      time: props.time,
      countNotReadMessage: props.countNotReadMessage,
      srcAvatar: props.srcAvatar,
    };
  }
  protected render(): string {
    const { id, userName, lastMessage, time, countNotReadMessage, srcAvatar } =
      this.state;

    const date = getDate(time);

    // language=hbs
    return `
      <li class="list-item" data-chat-id="${id}">
        <div class="list-item__container">
          ${
            srcAvatar
              ? '<div class="list-item__plug-avatar"></div>'
              : `{{{Avatar srcAvatar="${srcAvatar}" userName="${userName}"}}}`
          }
          <div class="list-item__inner">
            <p class="list-item__user-name">${userName}</p>
            <p class="list-item__message">
              ${
                lastMessage !== 'null'
                  ? `${lastMessage}`
                  : `{{#unless ${countNotReadMessage}}}<span class="list-item__message list-item__message_bold">Вы:</span>{{/unless}}`
              }
            </p>
          </div>
          <div class="list-item__wrap">
            <time class="list-item__time">${
              time !== 'null' ? DAYS[date.day - 1] : ''
            }</time>
            <p class="list-item__count-message {{#if ${countNotReadMessage}}}list-item__count-message_is-show{{/if}}">${countNotReadMessage}</p>
          </div>
        </div>
      </li>
    `;
  }
}
