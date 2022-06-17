import Block from "core/Block";
import "./not-found.css";

interface NotFoundPageProps {}

export class NotFoundPage extends Block {
  constructor(props: NotFoundPageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        {{{Error title="404" subtitle="Не туда попали"}}}
      </div>
    `;
  }
}
