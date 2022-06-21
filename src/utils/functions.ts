import { FormValidator } from 'utils/classes/FormValidator';
import { Popup } from 'utils/classes/Popup';
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
