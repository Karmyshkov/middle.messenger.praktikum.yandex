import { FormValidator } from 'utils/classes/FormValidator';
import { Popup } from 'utils/classes/Popup';
import { Input } from 'utils/classes/Input';
import { config, ADD_USER_FORM, DELETE_USER_FORM } from 'utils/constants';

const checkStateForm = (nameForm: string) => {
  return document.forms[nameForm].checkValidity();
};

const disableBtn = (buttonSelector: string) => {
  document
    .querySelector(`.${buttonSelector}`)
    ?.classList.add(config.isDisableBtnSubmitSelector);
};

export const handleSubmitForm = (
  formSelector: string,
  inputSelector: string,
  buttonSelector: string,
  element: HTMLElement | null
) => {
  if (FormValidator.checkStateForm(formSelector)) {
    const inputs = element?.querySelectorAll(`.${inputSelector}`);
    let dataForm = {};

    inputs?.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
    });
    console.log(dataForm);

    if (formSelector === ADD_USER_FORM || formSelector === DELETE_USER_FORM) {
      Popup.handleClosePopup(config.isOpenPopupSelecot);
    }
  } else {
    disableBtn(buttonSelector);
  }
};

export const checkOnValueInput = (evt: Event) => {
  evt.target && new Input(config, evt.target).checkOnValueInput();
};

export const toggleBtnState = (nameForm: string, btnSelector: string) => {
  const btn = document.forms[nameForm].querySelector(`.${btnSelector}`);
  checkStateForm(nameForm)
    ? btn.classList.remove(config.isDisableBtnSubmitSelector)
    : btn.classList.add(config.isDisableBtnSubmitSelector);
};
