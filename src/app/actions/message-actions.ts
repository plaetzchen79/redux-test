

import { Action } from '@ngrx/store';
import { Message } from '../models/message';

export const ADD =           '[Message] Add';
export const CLEAR =         '[Message] Clear';


/**
 * Just two actions for our message store.
 *
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

 /**
  * Action to add a new message
  * Payload (=data) is a single message
  */
export class AddAction implements Action {
  readonly type = ADD;

  constructor(public payload: Message) { }
}

/**
 * Action to clear all messages
 * no paload here
 */
export class ClearAction implements Action {
  readonly type = CLEAR;

  constructor() { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = AddAction
  | ClearAction;
