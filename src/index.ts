import { renderDOM, registerComponent, BlockConstructable } from "core";
import SigninPage from "pages/signin";
import SignupPage from "pages/signup";
import ChatPage from "pages/chat";
import NotFoundPage from "pages/not-found";
import ServerErrorPage from "pages/server-error";

import { components } from "components";

components.forEach((component) => {
  registerComponent(component);
});

const path = document.location.pathname;
let app = new SigninPage({});

switch (path) {
  case "/":
    app = new SigninPage({});
    break;
  case "/signup":
    app = new SignupPage({});
    break;
  case "/chat":
    app = new ChatPage({});
    break;
  default:
    app = new NotFoundPage({});
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(app);
});
