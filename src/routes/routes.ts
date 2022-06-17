import SigninPage from "pages/signin";
import SignupPage from "pages/signup";
import ChatPage from "pages/chat";
import ProfilePage from "pages/profile";
import NotFoundPage from "pages/not-found";
import ServerErrorPage from "pages/server-error";

export const getCurrentPage = () => {
  const path = document.location.pathname;
  let app = new SigninPage({});
  switch (path) {
    case "/":
      return (app = new SigninPage({}));
    case "/signup":
      return (app = new SignupPage({}));
    case "/chat":
      return (app = new ChatPage({}));
    case "/profile":
      return (app = new ProfilePage({}));
    default:
      app = new NotFoundPage({});
  }
  return app;
};
