import Block from "core/Block";
import "./server-error.css";

interface ServerErrorPageProps {}

export class ServerErrorPage extends Block {
  constructor(props: ServerErrorPageProps) {
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
