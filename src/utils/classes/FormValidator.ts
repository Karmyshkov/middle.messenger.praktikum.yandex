import { View } from './View';

export class FormValidator extends View {
  constructor(
    config: Record<string, string>,
    formSelector: string,
    inputSelector: string,
    btnSelector: string,
    inputHelperTextSelector: string,
    isShowHelperTextSelector: string
  ) {
    super();
    this._formSelector = formSelector;
    this._btnSelector = btnSelector;
    this._inputSelector = inputSelector;
    this._inputHelperTextSelector = inputHelperTextSelector;
    this._isShowHelperTextSelector = isShowHelperTextSelector;
    this._isDisableBtnSubmitSelector = config.isDisableBtnSubmitSelector;
    this._errorContainer = null;
  }

  private _closeErrorMessage() {
    if (this._errorContainer) {
      this._errorContainer.textContent = '';
      this._errorContainer.classList.remove(this._isShowHelperTextSelector);
    }
  }

  private _showErrorMessage(validationMessage: string) {
    if (this._errorContainer) {
      this._errorContainer.textContent = validationMessage;
      this._errorContainer.classList.add(this._isShowHelperTextSelector);
    }
  }

  private _getInputFromForm = () => {
    const form = document.querySelector(`.${this._formSelector}`) as HTMLFormElement;
    return form.querySelectorAll(`.${this._inputSelector}`);
  };

  public handleFieldValidation(evt: Event) {
    const element = evt.target;

    this._errorContainer = (<Element>(
      element
    ))?.parentElement?.parentElement?.querySelector(`.${this._inputHelperTextSelector}`);

    !(<HTMLFormElement>element).validity.valid
      ? this._showErrorMessage((<HTMLFormElement>element).validationMessage)
      : this._closeErrorMessage();
  }

  public clearError() {
    this._closeErrorMessage();
  }

  public checkStateForm() {
    const form = document.querySelector(`.${this._formSelector}`) as HTMLFormElement;
    return form.checkValidity();
  }

  public addErrorsForInput = () => {
    const inputs = this._getInputFromForm();
    inputs.forEach((input) => {
      const inputElement = input as HTMLFormElement;
      const element = input.parentElement?.parentElement?.querySelector(
        `.${this._inputHelperTextSelector}`
      );
      if (!inputElement.validity.valid) {
        if (element) {
          element.textContent = inputElement.validationMessage;
          element.classList.add(this._isShowHelperTextSelector);
        }
      }
    });
  };

  public toggleBtnState = () => {
    const btn = document
      .querySelector(`.${this._formSelector}`)
      ?.querySelector(`.${this._btnSelector}`);
    if (btn) {
      this.checkStateForm()
        ? btn.classList.remove(this._isDisableBtnSubmitSelector)
        : btn.classList.add(this._isDisableBtnSubmitSelector);
    }
  };

  public disableBtn = () => {
    document
      .querySelector(`.${this._btnSelector}`)
      ?.classList.add(this._isDisableBtnSubmitSelector);
  };
}
