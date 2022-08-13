import { BlockClass } from 'types';
import { Screens } from 'types';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Messenger from 'pages/chat';
import Profile from 'pages/profile';
import EditProfile from 'pages/edit-profile';
import EditPassword from 'pages/edit-password';
import PathNotFound from 'pages/not-found';

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Signin]: Signin,
  [Screens.Signup]: Signup,
  [Screens.Messenger]: Messenger,
  [Screens.Profile]: Profile,
  [Screens.EditProfle]: EditProfile,
  [Screens.EditPassword]: EditPassword,
  [Screens.PathNotFound]: PathNotFound,
};

const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};

export { Screens, getScreenComponent };
