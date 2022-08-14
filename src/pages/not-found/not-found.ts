import { Block, BrowseRouter as router } from 'core';
import { PATHNAMES } from 'utils';

export class NotFoundPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleClickByLink: () =>
        localStorage.getItem('isSignin')
          ? router.go(PATHNAMES.MESSAGER_PATH)
          : router.go(PATHNAMES.SIGNIN_PATH),
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        {{{Error
          onClick=handleClickByLink
          title="404"
          subtitle="Не туда попали"
        }}}
      </div>
    `;
  }
}
