import Block from 'core/Block';
import './users.css';
import { UsersProps } from './types';

export class Users extends Block {
  static componentName = 'Users';
  constructor({ users, onClick }: UsersProps) {
    super({ users, events: { click: onClick } });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      users:
        props.users !== 'undefined' && props.users.length > 0
          ? JSON.parse(props.users)
          : [],
    };
  }
  protected render(): string {
    const { users } = this.state;

    // language=hbs
    return `
      <ul class="users">
        ${
          users &&
          users
            .map(
              (user: any) =>
                `{{{UserItem
                  id=${user.id}
                  avatar="${user.avatar}"
                  login="${user.login}"
                  email="${user.email}"
                }}}`
            )
            .join('')
        }
      </ul>
    `;
  }
}
