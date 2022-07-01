import Block from 'core/Block';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Profile from 'pages/profile';

enum Screens {
  Signin = 'signin',
  Signup = 'signup',
  Profile = 'profile',
}

interface BlockClass<P> extends Function {
  new (props: P): Block<P>;
  componentName?: string;
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Signin]: Signin,
  [Screens.Signup]: Signup,
  [Screens.Profile]: Profile,
};

const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};

export { Screens, getScreenComponent };
