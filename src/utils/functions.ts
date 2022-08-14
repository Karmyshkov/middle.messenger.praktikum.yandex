import { BrowseRouter as router } from 'core';
import { config, DATA_ATTRIBUTE } from 'utils/constants';
import { showTooltip } from 'utils';

function getMessageFromResponse(errText: string) {
  return Object.values(JSON.parse(errText))[0];
}

function showError(err: any) {
  err.responseText &&
    showTooltip({
      text: getMessageFromResponse(err.responseText) as string,
      type: 'error',
    });
}

function getDate(time: string) {
  const date = new Date(time);
  return {
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.getDay(),
    month: date.getMonth(),
  };
}

function fixedBottomScroll() {
  const chat = document.querySelector(`.${config.contentDialodSelector}`);

  if (chat) {
    chat.scrollTop = chat.scrollHeight;
  }
}

function getUniqDateFromMessages(messages: any) {
  return Array.from(
    new Set(
      messages.map((message) => {
        const date = getDate(message.time);
        return date.day;
      })
    )
  );
}

function getIdUniqDates(messages: any) {
  const uniqDates = getUniqDateFromMessages(messages);

  return uniqDates.map((uniqDate) => {
    return messages.find((message) => {
      const date = getDate(message.time);

      if (date.day === uniqDate) {
        return message;
      }
    });
  });
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

export {
  showError,
  getDate,
  fixedBottomScroll,
  getIdUniqDates,
  checkIsLoginIn,
  getUserId,
};
