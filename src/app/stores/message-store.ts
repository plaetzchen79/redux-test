import { Message } from '../models/message';

/**
 * A Basic store
 */
export interface MessageStore {
  state: State;
}

/**
 * Definition of our State content
 */
export interface State {
  /**
   * A chain of messages
   */
  messages: Message[];

  /**
   * The last message (just to have some more property)
   */
  lastMessage: Message;

  /**
   * Current count of messages (just to have some more property)
   */
  count: number;
}
