import { Block, BrowseRouter as router, store } from 'core';
import 'styles/chat.css';
import {
  MessageProps,
  CreateChatType,
  SearchUserByLoginType,
  GetChatTokenType,
  STORE_EVENTS,
  MessageDTO,
} from 'types';
import { Chat, Popup, FormValidator } from 'utils/classes';
import {
  config,
  ADD_CHAT_FORM,
  ADD_USER_FORM,
  DELETE_USER_FORM,
  SETTINGS_PATH,
  DATA_ATTRIBUTE_CHAT_ID,
} from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils';
import { chatService, messagesService, profileService, authService } from 'services';

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
    authService.getInfo();
    messagesService.getMessages();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }

  protected getStateFromProps() {
    this.state = {
      chatItemId: 0,

      addClassForActiveElement: (evt: Event) => {
        const element = evt.currentTarget as HTMLElement;
        const chatItemId = element.getAttribute(DATA_ATTRIBUTE_CHAT_ID);

        this.setState({ chatItemId });

        const state = store.getState() as any;
        const { chats, userInfo } = state;

        this.setState({
          currentChat: chats.filter((chat: any) => chat.id === Number(chatItemId)),
        });

        if (chatItemId) {
          chatService
            .getChatToken({ chatId: Number(chatItemId) } as GetChatTokenType)
            .then(({ token }) =>
              messagesService.connect({
                userId: userInfo.id,
                chatId: Number(chatItemId),
                token,
              })
            );
        }

        store.on(STORE_EVENTS.UPDATE, () => {
          new Chat(config).addActiveClassName(evt);
        });
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

        store.on(STORE_EVENTS.UPDATE, () => {
          const state = store.getState();
          this.setProps({ chats: state.chats });
        });
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
      hendleFindUserByLogin: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: addUserFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: ADD_USER_FORM,
          disableBtn: addUserFormValidator.disableBtn,
          addErors: addUserFormValidator.addErrorsForInput,
        });

        if (dataForm) {
          profileService.searchUserByLogin({
            login: dataForm,
          } as SearchUserByLoginType);
        }

        store.on(STORE_EVENTS.UPDATE, () => {
          new Popup(
            config.popupAddUserSelector,
            config.btnSubmitFormSelector,
            config.isOpenPopupSelector,
            config
          ).handleOpenPopup();
        });
      },
      handleValidateAddUserInput: (evt: Event) => {
        addUserFormValidator.handleFieldValidation(evt);
      },
      handleAddUserToChat: (evt: Event) => {
        const target = evt.target as HTMLElement;
        const userItem = target.closest(`.${config.userItemSelector}`);
        const userId = userItem?.getAttribute('data-user-id');
        chatService.addUserToChat({
          users: [userId ? Number(userId) : 0],
          chatId: Number(this.state.chatItemId),
        });
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

      handleLinkBtn: () => router.go(SETTINGS_PATH),

      // send message

      handleSendMessage: (evt: Event) => {
        evt.preventDefault();
        const target = evt.target as HTMLFormElement;
        const input = target.querySelector('.chat-footer__input') as HTMLFormElement;
        messagesService.sendMessage(input.value);
        input.value = '';
      },
    };
  }
  render() {
    const { chats = [], users = [], messages = [], userInfo = [] } = this.props;
    const { chatItemId, currentChat } = this.state;
    console.log(messages);
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
                        lastMessage="${
                          chat.last_message ? chat.last_message.content : null
                        }"
                        time="${chat.last_message ? chat.last_message.time : null}"
                        countNotReadMessage="${chat.unread_count}"
                        srcAvatar="${chat.avatar}"
                        isOwnerLastMessage="${
                          chat.last_message
                            ? chat.last_message.user.login === userInfo.login
                            : null
                        }"
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
              ${
                currentChat &&
                currentChat.map((chat: any) => {
                  return `
                    {{{Avatar
                      srcAvatar="${chat.avatar}"
                      userName="${chat.title}"
                    }}}
                    <p class="chat__user-name">${chat.title}</p>
                `;
                })
              }
              </div>
              {{{BurgerMenu onClick=handleOpenUserMenu}}}
            </div>
            <p class="chat__text-date">19 июня</p>
            <ul class="chat__messages">
              ${messages
                .map(
                  (message: MessageDTO) =>
                    `{{{Message
                      owner=${message.user_id === userInfo.id}
                      content="${message.content}"
                      time="${message.time}"
                      isRead=${message.is_read}
                    }}}`
                )
                .join('')}
            </ul>
            {{{ChatFooter onSubmit=handleSendMessage onClick=handleOpenFileMenu}}}
          </li>
        </ul>
        {{{Menu isUser=true chatItemId="${chatItemId}"}}}
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
          onSubmit=hendleFindUserByLogin
          onInput=handleChangeAddUserInput
          onFocus=handleValidateAddUserInput
          onBlur=handleValidateAddUserInput
          onClick=handleAddUserToChat
          title="Добавить пользователя"
          helperText="Логин"
          textBtn="Найти"
          classesPopup="popup_add-user"
          classesForm="popup__form_add-user"
          isDefault=true
          name="popup__form_add-user"
          fieldName="login"
          users='${users}'
        }}}
        {{{Popup
          onSubmit=hendleSubmitDeleteUserForm
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
