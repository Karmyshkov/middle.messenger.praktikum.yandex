import { Input } from 'utils/classes/Input';
import { Popup } from './classes/Popup';
import { config } from 'utils/constants';
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
    const form = document.querySelector(`.${formSelector}`);
    if (form) {
      const inputs = form.querySelectorAll(`.${inputSelector}`);
      let dataForm = {};

      inputs?.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
      });

      Popup.handleClosePopup(config.isOpenPopupSelector);

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

export { handleSubmitForm, checkOnValueInput, isEqual, showError };
