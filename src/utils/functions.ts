import { BrowseRouter as router } from 'core';
import { Input } from 'utils/classes/Input';
import { Popup } from './classes/Popup';
import {
  config,
  ADD_USER_FORM,
  DELETE_USER_FORM,
  DATA_ATTRIBUTE_USER_ID,
} from 'utils/constants';
import { showTooltip } from 'utils';

interface SubmitFormProps {
  disableBtn: () => void;
  addErors: () => void;
  stateForm: boolean;
  inputSelector: string;
  formSelector: string;
  isValidField?: boolean | undefined;
  isNotCloseBySbmit?: boolean;
}

const handleSubmitForm = ({
  stateForm,
  inputSelector,
  formSelector,
  disableBtn,
  addErors,
  isValidField = undefined,
}: SubmitFormProps) => {
  if (stateForm && isValidField === undefined) {
    const form = document.querySelector(`.${formSelector}`) as HTMLFormElement;

    if (form) {
      const inputs = form.querySelectorAll(`.${inputSelector}`);
      let dataForm = {};

      inputs?.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
      });

      if (form.name !== ADD_USER_FORM && form.name !== DELETE_USER_FORM) {
        Popup.handleClosePopup(config.isOpenPopupSelector);
      }

      return dataForm;
    }
  } else {
    disableBtn();
    addErors();
  }
};

const checkOnValueInput = (evt: Event) => {
  evt.target && new Input(config, evt.target).checkOnValueInput();
};

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

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
  return Number(userItem?.getAttribute(DATA_ATTRIBUTE_USER_ID));
}

export {
  handleSubmitForm,
  checkOnValueInput,
  isEqual,
  showError,
  getDate,
  fixedBottomScroll,
  getIdUniqDates,
  checkIsLoginIn,
  getUserId,
};
