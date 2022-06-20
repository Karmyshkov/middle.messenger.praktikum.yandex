import Block from 'core/Block';
import './popup.css';
import { PopupProps } from './types';

export class Popup extends Block {
  constructor({
    classesPopup,
    classesForm,
    title,
    isDefault,
    helperText,
    textBtn,
    onClick,
  }: PopupProps) {
    super({
      classesPopup,
      classesForm,
      title,
      isDefault,
      helperText,
      textBtn,
      events: { click: onClick },
    });
  }
  protected getStateFromProps(props: PopupProps): void {
    this.state = {
      classesPopup: props.classesPopup,
      classesForm: props.classesForm,
      title: props.title,
      isDefault: props.isDefault,
      helperText: props.helperText,
      textBtn: props.textBtn,
    };
  }

  protected render(): string {
    const { classesPopup, classesForm, title, isDefault, helperText, textBtn } =
      this.state;
    // language=hbs
    return `
      <div class="popup ${classesPopup}">
        <div class="popup__container">
          <h2 class="popup__title">${title}</h2>
          <form class="popup__form ${classesForm}" name="form-edit-profile" novalidate>
            ${
              isDefault
                ? `
                    {{{Input onChangeInput=handleChangeInput type="text" helperText="${helperText}" minlength="5" maxlength="20"}}}
                    {{{Button textBtn="${textBtn}"}}}
                  `
                : `
                    {{{InputFile}}}
                    {{{Button textBtn="${textBtn}"}}}
                  `
            }
          </form>
        </div>
      </div>
    `;
  }
}