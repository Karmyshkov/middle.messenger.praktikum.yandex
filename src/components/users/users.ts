import { Block } from 'core';
import './users.css';
import { UsersProps } from './types';
import { UserType } from 'types';

export class Users extends Block {
  static componentName = 'Users';
  constructor({ users, type, onClick }: UsersProps) {
    super({ users, type, onClick });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      users:
        props.users !== 'undefined' && props.users.length > 0
          ? JSON.parse(props.users)
          : [],
      type: props.type,
      onClick: props.onClick,
    };
  }
  protected render(): string {
    const { users, type } = this.state;

    // language=hbs
    return `
      <ul class="users ${users?.length !== 0 ? 'users_is-margin' : ''}">
        ${
          users &&
          users
            .map(
              (user: UserType) =>
                `{{{UserItem
                  onClick=onClick
                  id=${user.id}
                  avatar="${user.avatar}"
                  login="${user.login}"
                  email="${user.email}"
                  type="${type}"
                  role="${user.role}"
                }}}`
            )
            .join('')
        }
      </ul>
    `;
  }
}
