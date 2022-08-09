import Block from 'core/Block';
import './popup.css';
import { PopupProps } from './types';

export class Popup extends Block {
  static componentName = 'Popup';
  constructor({
    classesPopup,
    classesForm,
    name,
    fieldName,
    title,
    isDefault,
    helperText,
    textBtn,
    users,
    onInput,
    onFocus,
    onBlur,
    onSubmit,
  }: PopupProps) {
    super({
      classesPopup,
      classesForm,
      name,
      title,
      fieldName,
      isDefault,
      helperText,
      textBtn,
      users,
      onInput,
      onFocus,
      onBlur,
      onSubmit,
    });
  }
  protected getStateFromProps(props: PopupProps): void {
    this.state = {
      classesPopup: props.classesPopup,
      classesForm: props.classesForm,
      name: props.name,
      fieldName: props.fieldName,
      title: props.title,
      isDefault: props.isDefault,
      helperText: props.helperText,
      textBtn: props.textBtn,
      users: props.users,
      onSubmit: props.onSubmit,
      onInput: props.onInput,
      onFocus: onfocus,
      onBlur: onblur,
    };
  }

  protected render(): string {
    const {
      classesPopup,
      classesForm,
      name,
      fieldName,
      title,
      isDefault,
      helperText,
      textBtn,
      users,
    } = this.state;
    // language=hbs
    return `
      <div class="popup ${classesPopup ? classesPopup : ''}">
        <div class="popup__container">
          <h2 class="popup__title">${title}</h2>
          {{{FormPopup
            onSubmit=onSubmit
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
            classesForm="${classesForm}"
            name="${name}"
            fieldName="${fieldName}"
            isDefault=${isDefault}
            helperText="${helperText}"
            textBtn="${textBtn}"
            users='${users}'
          }}}
        </div>
      </div>
    `;
  }
}
