import { renderDOM, registerComponent, BlockConstructable } from "core";
import SigninPage from "pages/signin";
import SignupPage from "pages/signup";

import Input from "components/input";
import Button from "components/button";

const components: BlockConstructable<any>[] = [Input, Button];

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
  default:
    app = new SigninPage({});
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(app);
});
