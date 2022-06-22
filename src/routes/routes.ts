import SigninPage from 'pages/signin';
import SignupPage from 'pages/signup';
import ChatPage from 'pages/chat';
import ProfilePage from 'pages/profile';
import EditProfilePage from 'pages/edit-profile';
import EditPasswordPage from 'pages/edit-password';
import NotFoundPage from 'pages/not-found';

export const getCurrentPage = () => {
  const path = document.location.pathname;
  switch (path) {
    case '/':
      return new SigninPage({});
    case '/signup':
      return new SignupPage({});
    case '/chat':
      return new ChatPage({});
    case '/profile':
      return new ProfilePage({});
    case '/edit-profile':
      return new EditProfilePage({});
    case '/edit-password':
      return new EditPasswordPage({});
    default:
      return new NotFoundPage({});
  }
};
