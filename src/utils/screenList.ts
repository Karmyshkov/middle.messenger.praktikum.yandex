import { BlockClass } from 'types';
import { Screens } from 'types';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Profile from 'pages/profile';

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Signin]: Signin,
  [Screens.Signup]: Signup,
  [Screens.Profile]: Profile,
};

const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};

export { Screens, getScreenComponent };
