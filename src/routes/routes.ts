import SigninPage from 'pages/signin';
import SignupPage from 'pages/signup';
import ChatPage from 'pages/chat';
import ProfilePage from 'pages/profile';
import EditProfilePage from 'pages/edit-profile';
import EditPasswordPage from 'pages/edit-password';
import NotFoundPage from 'pages/not-found';

export const getCurrentPage = () => {
  const path = document.location.pathname;
  let app = {};
  switch (path) {
    case '/':
      return (app = new SigninPage({}));
    case '/signup':
      return (app = new SignupPage({}));
    case '/chat':
      return (app = new ChatPage({}));
    case '/profile':
      return (app = new ProfilePage({}));
    case '/edit-profile':
      return (app = new EditProfilePage({}));
    case '/edit-password':
      return (app = new EditPasswordPage({}));
    default:
      app = new NotFoundPage({});
  }
  return app;
};
