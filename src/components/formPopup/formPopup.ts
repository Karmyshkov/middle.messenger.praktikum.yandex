import Block from 'core/Block';
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
    onSubmit,
  }: any) {
    super({
      classesForm,
      name,
      isDefault,
      helperText,
      fieldName,
      textBtn,
      events: { click: onSubmit },
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
    };
  }
  protected render(): string {
    const { classesForm, name, isDefault, helperText, fieldName, textBtn } = this.state;

    // language=hbs
    return `
          <form class="formPopup ${
            classesForm !== 'undefined' ? classesForm : ''
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
                    name="${fieldName}"
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
    `;
  }
}
