import Block from 'core/Block';
import './listItem.css';
import { ListItemProps } from './types';
import { ChatType } from 'types';

export class ListItem extends Block {
  static componentName = 'ListItem';
  constructor({
    userName,
    lastMessage,
    time,
    countNotReadMessage,
    srcAvatar,
    onClick,
  }: ChatType & ListItemProps) {
    super({
      userName,
      lastMessage,
      time,
      countNotReadMessage,
      srcAvatar,
      events: { click: onClick },
    });
  }
  protected getStateFromProps(props: ChatType): void {
    this.state = {
      userName: props.userName,
      lastMessage: props.lastMessage,
      time: props.time,
      countNotReadMessage: props.countNotReadMessage,
      srcAvatar: props.srcAvatar,
    };
  }
  protected render(): string {
    const { userName, lastMessage, time, countNotReadMessage, srcAvatar } = this.state;
    // language=hbs
    return `
      <li class="list-item">
        <div class="list-item__container">
          {{{Avatar srcAvatar="${srcAvatar}" userName="${userName}"}}}
          <div class="list-item__inner">
            <p class="list-item__user-name">${userName}</p>
            <p class="list-item__message">{{#unless ${countNotReadMessage}}}<span class="list-item__message list-item__message_bold">Вы:</span>{{/unless}}${lastMessage}</p>
          </div>
          <div class="list-item__wrap">
            <time class="list-item__time">${time}</time>
            <p class="list-item__count-message {{#if ${countNotReadMessage}}}list-item__count-message_is-show{{/if}}">${countNotReadMessage}</p>
          </div>
        </div>
      </li>
    `;
  }
}
