import { View } from './View';

export class Input extends View {
  constructor(config: Record<string, string>, element: EventTarget) {
    super();
    this._inputElement = element;
    this._labelTextSelector = config.labelTextSelector;
    this._isValuelabelTextSelector = config.isValuelabelTextSelector;
  }

  _addClassNameToHelperText(helperText: Element | null | undefined) {
    helperText && helperText.classList.add(this._isValuelabelTextSelector);
  }

  _removeClassNameToHelperText(helperText: Element | null | undefined) {
    helperText && helperText.classList.remove(this._isValuelabelTextSelector);
  }

  checkOnValueInput() {
    const input = this._inputElement as HTMLInputElement;
    const helperText = input.parentElement?.querySelector(`.${this._labelTextSelector}`);
    input.value.length === 0
      ? this._removeClassNameToHelperText(helperText)
      : this._addClassNameToHelperText(helperText);
  }
}
