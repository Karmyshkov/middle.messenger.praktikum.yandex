import { View } from './View';

export class FormValidator extends View {
  constructor(config: Record<string, string>) {
    super();
    this._inputHelperTextSelector = config.inputHelperTextSelector;
    this._isShowHelperTextSelector = config.isShowHelperTextSelector;
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

  public static checkStateForm(formSelector: string) {
    return document.forms[formSelector].checkValidity();
  }
}
