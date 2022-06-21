import Block from 'core/Block';
import './popup.css';
import { PopupProps } from './types';
import { Input } from 'utils/Input';
import { FormValidator } from 'utils/FormValidator';
import { Popup as PopupClass } from 'utils/Popup';
import { config } from 'utils/constants';

export class Popup extends Block {
  constructor({
    classesPopup,
    classesForm,
    name,
    title,
    isDefault,
    helperText,
    textBtn,
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
      events: { click: onClick },
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

      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();

        if (
          FormValidator.checkStateForm(
            evt.target.textContent === 'Добавить' ? 'add-user' : 'delete-user'
          )
        ) {
          const inputs = this.element?.querySelectorAll('.input__text-field');
          let dataForm = {};

          inputs?.forEach((input) => {
            const inputElement = input as HTMLInputElement;
            dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
          });
          console.log(dataForm);
          PopupClass.handleClosePopup('popup_opened');
        }
      },
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
                    {{{InputWrapper onInput=handleChangeInput type="text" helperText="${helperText}" minlength="5" maxlength="20" name="login"}}}
                    {{{Button onClick=hendleSubmitForm textBtn="${textBtn}" type="submit"}}}
                  `
                : `
                    {{{InputFile}}}
                    {{{Button textBtn="${textBtn}" type="submit"}}}
                  `
            }
          </form>
        </div>
      </div>
    `;
  }
}
