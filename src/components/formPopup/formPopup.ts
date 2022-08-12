import { Block } from 'core';
import './formPopup.css';

export class FormPopup extends Block {
  static componentName = 'FormPopup';
  constructor({
    classesForm,
    name,
    isDefault,
    helperText,
    fieldName,
    textBtn,
    users,
    onSubmit,
    onInput,
    onFocus,
    onBlur,
    onClick,
  }: any) {
    super({
      classesForm,
      name,
      isDefault,
      helperText,
      fieldName,
      textBtn,
      users,
      onInput,
      onFocus,
      onBlur,
      onClick,
      events: { submit: onSubmit },
    });
  }
  protected getStateFromProps(props: any): void {
    this.state = {
      classesForm: props.classesForm,
      name: props.name,
      isDefault: props.isDefault,
      helperText: props.helperText,
      fieldName: props.fieldName,
      textBtn: props.textBtn,
      users: props.users,
      onInput: props.onInput,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onClick: props.onClick,
    };
  }
  protected render(): string {
    const { classesForm, name, isDefault, helperText, fieldName, textBtn, users } =
      this.state;

    const renderFormElement = () => {
      if (classesForm !== 'popup__form_delete-user') {
        return isDefault
          ? `
            {{{InputWrapper
              onInput=onInput
              onFocus=onFocus
              onBlur=onBlur
              type="text"
              helperText="${helperText}"
              minlength="5"
              maxlength="20"
              name="${fieldName}"
            }}}
            {{{Button
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
          `;
      }
      return '';
    };

    // language=hbs
    return `
          <form class="formPopup ${
            classesForm !== 'undefined' ? classesForm : ''
          }" name="${name}" novalidate>
            ${renderFormElement()}
            ${
              users !== 'undefined'
                ? `
                {{{Users
                  users='${users}'
                  onClick=onClick
                  type="${classesForm === 'popup__form_delete-user' ? 'delete' : 'add'}"
                }}}`
                : ''
            }
          </form>
    `;
  }
}
