import { FormValidator } from 'utils/classes/FormValidator';
import { Popup } from 'utils/classes/Popup';
import { Input } from 'utils/classes/Input';
import { config, ADD_USER_FORM, DELETE_USER_FORM } from 'utils/constants';

export const handleSubmitForm = (
  nameForm: string,
  inputSelector: string,
  element: HTMLElement | null
) => {
  if (FormValidator.checkStateForm(nameForm)) {
    const inputs = element?.querySelectorAll(`.${inputSelector}`);
    let dataForm = {};

    inputs?.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
    });
    console.log(dataForm);

    if (nameForm === ADD_USER_FORM || nameForm === DELETE_USER_FORM) {
      Popup.handleClosePopup(config.isOpenPopupSelecot);
    }
  }
};

export const checkOnValueInput = (evt: Event) => {
  evt.target && new Input(config, evt.target).checkOnValueInput();
};

const checkStateForm = (nameForm: string) => {
  return document.forms[nameForm].checkValidity();
};

export const toggleBtnState = (nameForm: string, btnSelector: string) => {
  const btn = document.forms[nameForm].querySelector(`.${btnSelector}`);
  checkStateForm(nameForm)
    ? btn.classList.remove(config.isDisableBtnSubmitSelector)
    : btn.classList.add(config.isDisableBtnSubmitSelector);
};
