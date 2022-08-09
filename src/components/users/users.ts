import Block from 'core/Block';
import './users.css';
import { UsersProps } from './types';

export class Users extends Block {
  static componentName = 'Users';
  constructor({ users, onClick }: UsersProps) {
    super({ users, onClick });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      users:
        props.users !== 'undefined' && props.users.length > 0
          ? JSON.parse(props.users)
          : [],
      onClick: props.onClick,
    };
  }
  protected render(): string {
    const { users } = this.state;

    // language=hbs
    return `
      <ul class="users ${users?.length !== 0 ? 'users_is-margin' : ''}">
        ${
          users &&
          users
            .map(
              (user: any) =>
                `{{{UserItem
                  onClick=onClick
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
