import { renderDOM, registerComponent, BlockConstructable } from "core";
import SigninPage from "pages/signin";

// import "./app.css"

import Input from "components/input";
import Button from "components/button";

const components: BlockConstructable<any>[] = [Input, Button];

components.forEach((component) => {
  registerComponent(component);
});

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new SigninPage({}));
});
