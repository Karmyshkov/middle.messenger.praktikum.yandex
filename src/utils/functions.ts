import { Input } from 'utils/classes/Input';
import { Popup } from './classes/Popup';
import { config } from 'utils/constants';

export const handleSubmitForm = (
  stateForm: boolean,
  inputSelector: string,
  formSelector: string,
  { disableBtn, addErors }: any,
  isValidField: boolean | undefined = undefined
) => {
  if (stateForm && isValidField === undefined) {
    const form = document.querySelector(`.${formSelector}`);
    if (form) {
      const inputs = form.querySelectorAll(`.${inputSelector}`);
      let dataForm = {};

      inputs?.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
      });
      console.log(dataForm);

      Popup.handleClosePopup(config.isOpenPopupSelecot);
    }
  } else {
    disableBtn();
    addErors();
  }
};

export const checkOnValueInput = (evt: Event) => {
  evt.target && new Input(config, evt.target).checkOnValueInput();
};
