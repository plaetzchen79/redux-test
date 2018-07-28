# ReduxTest
A little project to test and set up a basic flux/redux test using ngrx.

## What is Flux/Redux.
- Poblem
In huge client projects it becomes hard to understand which component changes data and to keep
other components which depend on the same data up to date with this chnaged data (snychronised).
(indepedent views need to in sync).

- Solution
Fux is an architecture where data is changed in one place. No component changes data directly (e.g. with two-way binding).
  - Redux is an implementation of Flux
  - ngrx is the implementation of Redux for Angular

## Pros of Flux/Redux
- decouple application (from presentation framework)
- better tests (function driven)
- simple undo or redo implementation (really impressive)
- predictable
- good browse extensions / tools to inspect application state

## Cons of Flux/ Redux
- more boilerplate code
- heavy usage of rxjs syntax (you may like it)

## When to use Flux/Redux
- large SPA
- different views deal with same type of data - and thteres no hieracial realationship
- indepedent views need to in sync
- data can be updated by multiple actors/ user

## Architecture/ Elements of Flux/Redux
### Store
  - Holds the states of application
  - acts like client-side db  (e.g. our list of messages in this project)
  - like an BehavoirSUbject/ Observable in ngrx/store

A little like an  an angular service. It needs an interface to define app state.
You can `select` data or `dispatch` an new action.

### Actions
Indicate that something has happend in the app (event). Actions have a name (type) and optional data (payload).

### Reducers
Function how the state changes in response to an action (kind of action / event handler).
A Reucer does *not midify* state directly- it *always* returns a *new* state.
Therefore a `...` (spread operator) is used in the example.
It is not changing its input paramters.  The type of the action is handled inside a `switch` statement.

## This project
This projects sets a up this elements. The goal is to store a simple messgae queue for the application.
For each Flux/ Redux element there is a folder.

- The Message interface consits of a message and a log date (models/message.ts)
- The basic **store** is defined in store/message-store.ts
- Some basic **actions** (Add / Clear) can be found in actions/message-actions.ts
- The reducer to handle thes actions can be found in reducers/message-reducers.ts

The app.component holds a simple observable to listen to our messages using the `async` pipe.
And of course theres a little gui to make the **actions** work for the users.

**Overview**
AppComponent -> dispatch(action) -> reducer handles action -> updates states -> AppComponent view gets updated

## How to start
Just run `ng serve` to build the project.
Play with the actions.
See the **states** in the console output.
You should install the browser extensions to better see the states and for undo/ redo. 
Look [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
Install, Press F12, see tab "Redux" in the 

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Actually i do not care for testing here (shame on me).
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help
[Youtube Quickstart](https://www.youtube.com/watch?v=f97ICOaekNU)
