import * as message from '../actions/message-actions';
import { ActionReducerMap } from '@ngrx/store';
import { MessageStore, State } from '../stores/message-store';

/**
 * Reducers for our store
 * Reducer: funtion how the state changes in response to an action (action / event handler)
 */
export const messageStoreReducers: ActionReducerMap<MessageStore> = {
  state: messageReducer
};


/**
 * The first state
 */
export const initialState: State = {
  messages: [],
  lastMessage: null,
  count: 0
};

/**
 * The main reducer for our message store
 * @param state current state, initialized with default stae
 * @param action type of action to react to
 */
export function messageReducer(state = initialState, action: message.Actions): State {
  console.log('old state is:', state);

  // Handle our actions here
  switch (action.type) {
    case message.CLEAR: {

      const newStateObject =  Object.assign({}, state, {
        messages: [],
        lastMessage: null,
        count: 0
      });

      console.log('new state is:', newStateObject);
      return newStateObject;
    }

    case message.ADD: {
      const incomingMessage = action.payload;

      const newStateObject = Object.assign({}, state, {
        messages: [...state.messages, incomingMessage],
        lastMessage: incomingMessage,
        count: state.count + 1
      });

      console.log('new state is:', newStateObject);

      return newStateObject;
    }

    default: {
      console.log('new state is:', state);

      return state;
    }
  }
}





