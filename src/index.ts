import { renderDOM, registerComponent } from 'core';
import { getCurrentPage } from 'routes';
import { components } from 'components';

components.forEach((component) => {
  registerComponent(component);
});

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(getCurrentPage());
});
