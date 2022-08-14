import { BrowseRouter as router } from 'core';
import { config, DATA_ATTRIBUTE } from 'utils/constants';

function fixedBottomScroll() {
  const chat = document.querySelector(`.${config.contentDialodSelector}`);

  if (chat) {
    chat.scrollTop = chat.scrollHeight;
  }
}

function checkIsLoginIn() {
  if (!localStorage.getItem('isSignin')) {
    router.back();
  }
}

function getUserId(evt: Event) {
  const target = evt.target as HTMLElement;
  const userItem = target.closest(`.${config.userItemSelector}`);
  return Number(userItem?.getAttribute(DATA_ATTRIBUTE.USER_ID));
}

export { fixedBottomScroll, checkIsLoginIn, getUserId };
