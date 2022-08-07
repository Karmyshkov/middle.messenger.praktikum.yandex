import Block from 'core/Block';
import 'styles/chat.css';
import messages from 'data/messages.json';
import { MessageProps, CreateChatType } from 'types';
import { Chat } from 'utils/classes';
import { Popup } from 'utils/classes';
import { FormValidator } from 'utils/classes';
import { config, ADD_CHAT_FORM, ADD_USER_FORM, DELETE_USER_FORM } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils';
import store, { STORE_EVENTS } from 'core/Store';
import { chatService } from 'services';
import { BrowseRouter as router } from 'core';

const addChatFromValidator = new FormValidator(
  config,
  ADD_CHAT_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

const addUserFormValidator = new FormValidator(
  config,
  ADD_USER_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

const deleteUserFormValidator = new FormValidator(
  config,
  DELETE_USER_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class ChatPage extends Block {
  constructor(...args: any) {
    super(...args);

    chatService.getChats();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }

  protected getStateFromProps() {
    this.state = {
      addClassForActiveElement: (evt: Event) => {
        const element = evt.currentTarget as HTMLElement;
        const currentListItemId = element.getAttribute('data-item-id');
        console.log(currentListItemId);
        new Chat(config).addActiveClassName(evt);
      },
      handleSearchByChats: () => {
        new Chat(config).toggleStateImg();
      },
      handleOpenUserMenu: () => {
        new Popup(
          config.menuListElementUserSelector,
          config.burgerMenuSelector,
          config.isShowMenuSelecor,
          config
        ).handleOpenPopup();
      },
      handleOpenFileMenu: () => {
        new Popup(
          config.menuListElementFileSelector,
          config.btnAttachSelector,
          config.isShowMenuSelecor,
          config
        ).handleOpenPopup();
      },

      //add chat

      handleChangeAddChatInput: (evt: Event) => {
        checkOnValueInput(evt);
        addChatFromValidator.clearError();
        addChatFromValidator.toggleBtnState();
      },
      hendleSubmitAddChatForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: addChatFromValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: ADD_CHAT_FORM,
          disableBtn: addChatFromValidator.disableBtn,
          addErors: addChatFromValidator.addErrorsForInput,
        });

        dataForm && chatService.createChat(dataForm as CreateChatType);
      },
      handleValidateAddChatInput: (evt: Event) => {
        addChatFromValidator.handleFieldValidation(evt);
      },

      // add user

      handleChangeAddUserInput: (evt: Event) => {
        checkOnValueInput(evt);
        addUserFormValidator.clearError();
        addUserFormValidator.toggleBtnState();
      },
      hendleSubmitAddUserForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: addUserFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: ADD_USER_FORM,
          disableBtn: addUserFormValidator.disableBtn,
          addErors: addUserFormValidator.addErrorsForInput,
        });

        console.log(dataForm);
      },
      handleValidateAddUserInput: (evt: Event) => {
        addUserFormValidator.handleFieldValidation(evt);
      },

      // delete user

      handleChangeDeleteUserInput: (evt: Event) => {
        checkOnValueInput(evt);
        deleteUserFormValidator.clearError();
        deleteUserFormValidator.toggleBtnState();
      },
      hendleSubmitDeleteUserForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: deleteUserFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: DELETE_USER_FORM,
          disableBtn: deleteUserFormValidator.disableBtn,
          addErors: deleteUserFormValidator.addErrorsForInput,
        });

        console.log(dataForm);
      },
      handleValidateDeleteUserInput: (evt: Event) => {
        deleteUserFormValidator.handleFieldValidation(evt);
      },

      // ###

      handleLinkBtn: () => router.go('/settings'),
    };
  }
  render() {
    const { chats = [] } = this.props;
    // language=hbs
    return `
      <div class="page">
        <ul class="chat">
          <li class="chat__column chat__column_left">
            {{{ChatLink onClick=handleLinkBtn}}}
            {{{SearchChat onSearchByChats=handleSearchByChats }}}
            <ul class="chat__list">
              ${
                chats &&
                Object.values(chats)
                  ?.map(
                    (chat: any) =>
                      `{{{ListItem
                      id="${chat.id}"
                      userName="${chat.title}"
                      lastMessage="${chat.last_message}"
                      time="${chat.created_by}"
                      countNotReadMessage="${chat.unread_count}"
                      srcAvatar="${chat.avatar}"
                      onClick=addClassForActiveElement
                    }}}`
                  )
                  .join('')
              }
            </ul>
          </li>
          <li class="chat__column chat__column-default">
            <h2 class="chat__title">Выберите чат чтобы отправить сообщение</h2>
          </li>
          <li class="chat__column chat__column-dialog chat__column_is-hidden">
            <div class="chat__header">
              <div class="chat__inner">
                {{{Avatar
                  srcAvatar="https://4tololo.ru/sites/default/files/images/20151308202253.jpg?itok=XZXWgPTt"
                  userName="Вадим"
                }}}
                <p class="chat__user-name">Вадим</p>
              </div>
              {{{BurgerMenu onClick=handleOpenUserMenu}}}
            </div>
            <p class="chat__text-date">19 июня</p>
            <ul class="chat__messages">
              ${messages.payload
                .map(
                  (message: MessageProps) =>
                    `{{{Message
                      owner=${message.owner}
                      text="${message.text ? message.text : ''}"
                      time="${message.time}"
                      srcImg="${message.srcImg ? message.srcImg : ''}"
                      isRead=${message.isRead ? true : false}
                    }}}`
                )
                .join('')}
            </ul>
            {{{ChatFooter onClick=handleOpenFileMenu}}}
          </li>
        </ul>
        {{{Menu isUser=true}}}
        {{{Menu isUser=false}}}
        {{{Popup
          onSubmit=hendleSubmitAddChatForm
          onInput=handleChangeAddChatInput
          onFocus=handleValidateAddChatInput
          onBlur=handleValidateAddChatInput
          title="Создать чат"
          helperText="Название"
          textBtn="Создать"
          classesPopup="popup_add-chat"
          classesForm="popup__form_add-chat"
          isDefault=true
          name="popup__form_add-chat"
          fieldName="title"
        }}}
        {{{Popup
          onClick=hendleSubmitAddUserForm
          onInput=handleChangeAddUserInput
          onFocus=handleValidateAddUserInput
          onBlur=handleValidateAddUserInput
          title="Добавить пользователя"
          helperText="Логин"
          textBtn="Добавить"
          classesPopup="popup_add-user"
          classesForm="popup__form_add-user"
          isDefault=true
          name="popup__form_add-user"
          fieldName="login"
        }}}
        {{{Popup
          onClick=hendleSubmitDeleteUserForm
          onInput=handleChangeDeleteUserInput
          onFocus=handleValidateDeleteUserInput
          onBlur=handleValidateDeleteUserInput
          title="Удалить пользователя"
          helperText="Логин"
          textBtn="Удалить"
          classesPopup="popup_delete-user"
          classesForm="popup__form_delete-user"
          isDefault=true
          name="popup__form_delete-user"
          fieldName="login"
        }}}
      </div>
    `;
  }
}
