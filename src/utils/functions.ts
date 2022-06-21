import { Input } from 'utils/classes/Input';
import { Popup } from './classes/Popup';
import { config } from 'utils/constants';

export const handleSubmitForm = (
  stateForm: boolean,
  inputSelector: string,
  element: HTMLElement | null,
  { disableBtn, addErors }: any
) => {
  if (stateForm) {
    const inputs = element?.querySelectorAll(`.${inputSelector}`);
    let dataForm = {};

    inputs?.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
    });
    console.log(dataForm);

    Popup.handleClosePopup(config.isOpenPopupSelecot);
  } else {
    disableBtn();
    addErors();
  }
};

export const checkOnValueInput = (evt: Event) => {
  evt.target && new Input(config, evt.target).checkOnValueInput();
};
