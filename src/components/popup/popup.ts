import Block from 'core/Block';
import './popup.css';
import { PopupProps } from './types';

export class Popup extends Block {
  static componentName = 'Popup';
  constructor({
    classesPopup,
    classesForm,
    name,
    title,
    isDefault,
    helperText,
    textBtn,
    onInput,
    onFocus,
    onBlur,
    onClick,
  }: PopupProps) {
    super({
      classesPopup,
      classesForm,
      name,
      title,
      isDefault,
      helperText,
      textBtn,
      onInput,
      onFocus,
      onBlur,
      onClick,
    });
  }
  protected getStateFromProps(props: PopupProps): void {
    this.state = {
      classesPopup: props.classesPopup,
      classesForm: props.classesForm,
      name: props.name,
      title: props.title,
      isDefault: props.isDefault,
      helperText: props.helperText,
      textBtn: props.textBtn,
      onClick: props.onClick,
      onInput: props.onInput,
      onFocus: onfocus,
      onBlur: onblur,
    };
  }

  protected render(): string {
    const { classesPopup, classesForm, name, title, isDefault, helperText, textBtn } =
      this.state;
    // language=hbs
    return `
      <div class="popup ${classesPopup ? classesPopup : ''}">
        <div class="popup__container">
          <h2 class="popup__title">${title}</h2>
          <form class="popup__form ${
            classesForm ? classesForm : ''
          }" name="${name}" novalidate>
            ${
              isDefault
                ? `
                  {{{InputWrapper
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    type="text"
                    helperText="${helperText}"
                    minlength="5"
                    maxlength="20"
                    name="login"
                  }}}
                  {{{Button
                    onClick=onClick
                    textBtn="${textBtn}"
                    type="submit"
                  }}}
                  `
                : `
                  {{{InputFile}}}
                  {{{Button
                    textBtn="${textBtn}"
                    type="submit"
                  }}}
                  `
            }
          </form>
        </div>
      </div>
    `;
  }
}
