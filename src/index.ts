import { registerComponent, BrowseRouter as router } from 'core';
import { getScreenComponent } from './utils/screenList';
import { Screens } from 'types';
import { components } from 'components';

components.forEach((component) => {
  registerComponent(component);
});

document.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', getScreenComponent(Screens.Signin))
    .use('/sign-up', getScreenComponent(Screens.Signup))
    .use('/messenger', getScreenComponent(Screens.Messenger))
    .use('/settings', getScreenComponent(Screens.Profile))
    .use('/edit-settings', getScreenComponent(Screens.EditProfle))
    .use('/edit-password', getScreenComponent(Screens.EditPassword))
    .use('/path-not-found', getScreenComponent(Screens.PathNotFound))
    .start();
});
