import Block from 'core/Block';
import './not-found.css';

export class NotFoundPage extends Block {
  render() {
    // language=hbs
    return `
      <div class="page">
        {{{Error title="404" subtitle="Не туда попали"}}}
      </div>
    `;
  }
}
