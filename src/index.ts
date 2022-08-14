import { registerComponent, BrowseRouter as router } from 'core';
import { getScreenComponent, PATHNAMES } from './utils';
import { Screens } from 'types';
import { components } from 'components';

components.forEach((component) => {
  registerComponent(component);
});

document.addEventListener('DOMContentLoaded', () => {
  router
    .use(PATHNAMES.PUBLIC.SIGNIN_PATH, getScreenComponent(Screens.Signin))
    .use(PATHNAMES.PUBLIC.SIGNUP_PATH, getScreenComponent(Screens.Signup))
    .use(PATHNAMES.PRIVATE.MESSAGER_PATH, getScreenComponent(Screens.Messenger))
    .use(PATHNAMES.PRIVATE.SETTINGS_PATH, getScreenComponent(Screens.Profile))
    .use(PATHNAMES.PRIVATE.EDIT_SETTINGS_PATH, getScreenComponent(Screens.EditProfle))
    .use(PATHNAMES.PRIVATE.EDIT_PASSWORD_PATH, getScreenComponent(Screens.EditPassword))
    .use(PATHNAMES.PATH_NOT_FOUND, getScreenComponent(Screens.PathNotFound))
    .start();
});
