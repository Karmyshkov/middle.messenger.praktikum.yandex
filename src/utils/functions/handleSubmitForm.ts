import { config, FORM_ELEMENTS, Popup } from 'utils';

interface SubmitFormProps {
  disableBtn: () => void;
  addErors: () => void;
  stateForm: boolean;
  inputSelector: string;
  formSelector: string;
  isValidField?: boolean | undefined;
  isNotCloseBySbmit?: boolean;
}

export const handleSubmitForm = ({
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

      if (
        form.name !== FORM_ELEMENTS.ADD_USER_FORM &&
        form.name !== FORM_ELEMENTS.DELETE_USER_FORM
      ) {
        Popup.handleClosePopup(config.isOpenPopupSelector);
      }

      return dataForm;
    }
  } else {
    disableBtn();
    addErors();
  }
};
