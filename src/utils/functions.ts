import { Input } from 'utils/classes/Input';
import { Popup } from './classes/Popup';
import { config } from 'utils/constants';

interface SubmitFormProps {
  disableBtn: () => void;
  addErors: () => void;
  stateForm: boolean;
  inputSelector: string;
  formSelector: string;
  isValidField?: boolean | undefined;
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
    const form = document.querySelector(`.${formSelector}`);
    if (form) {
      const inputs = form.querySelectorAll(`.${inputSelector}`);
      let dataForm = {};

      inputs?.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
      });

      Popup.handleClosePopup(config.isOpenPopupSelecot);

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

export { handleSubmitForm, checkOnValueInput, isEqual };
