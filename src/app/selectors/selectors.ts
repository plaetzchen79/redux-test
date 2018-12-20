import { MessageStore } from './../stores/message-store';
import { Message } from './../models/message';
import { State } from '../stores/message-store';
import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';



/**
 * 1st Create feature selector
 */
export const getAllMessages = createFeatureSelector<MessageStore>('messages');

/**
 * Selector to get all messages in upper case
 * Beware of App module!:
 *   StoreModule.forFeature('messages', messageStoreReducers),
 * @example
 * this.myStringMessages = this.store.select(getUpperMessages);
 */
export const getUpperMessages = createSelector(
  getAllMessages,
  (myStore: MessageStore) => getMessages(myStore.state).map(item => item.message.toUpperCase())
);


/**
 * Shortcut to get messages of a state with ease
 * @param state
 */
export const getMessages = (state: State) => state.messages;

/**
 * Shortcut get the last message of a state with ease
 * @param state
 */
export const getLastMessage = (state: State) => state.lastMessage;

/**
 * Shortcut get the count of a state with ease
 * @param state
 */
export const getCount = (state: State) => state.count;

export const getAll = createSelector(
  getMessages,
  messages => {
    return messages;
  }
);
