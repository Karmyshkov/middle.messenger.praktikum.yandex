import SigninPage from "pages/signin";
import SignupPage from "pages/signup";
import ChatPage from "pages/chat";
import NotFoundPage from "pages/not-found";
import ServerErrorPage from "pages/server-error";

export const getCurrentPage = () => {
  const path = document.location.pathname;
  let app = new SigninPage({});
  switch (path) {
    case "/":
      app = new SigninPage({});
      break;
    case "/signup":
      app = new SignupPage({});
      break;
    case "/chat":
      app = new ChatPage({});
      break;
    default:
      app = new NotFoundPage({});
  }
  return app;
};
