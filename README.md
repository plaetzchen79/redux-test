# ReduxTest
A little project to test and set up a basic flux/redux application using ngrx.

## What is Flux/Redux?
### Problem
In huge client projects it becomes hard to understand which component changes data and to keep
other components which depend on the same data up to date with this changed data (synchronised).
(indepedent views need to be in sync).

### Solution
Flux is an architecture where data is changed in one place. No component changes data directly (e.g. with two-way binding).
  - Redux is an implementation of Flux
  - ngrx is the implementation of Redux for Angular

## Pros of Flux/Redux
- decouple application (from presentation framework)
- better tests (function driven)
- simple undo or redo implementation (really impressive)
- predictable
- good browser extensions / tools to inspect application state avaialable

## Cons of Flux/ Redux
- more boilerplate code
- heavy usage of rxjs syntax (you may like it)

## When to use Flux/Redux
- large SPA
- different views deal with same type of data - and there is no hieracial realationship
- indepedent views need to be in sync
- data can be updated by multiple actors/ users

## Architecture/ Elements of Flux/Redux
### Store
  - Holds the states of application
  - acts like client-side db  (e.g. our list of messages in this project)
  - like an BehavoirSubject/ Observable in ngrx/store

A little like an an angular service. It needs an interface to define app state.
You can `select` data or `dispatch` an new action.

### Actions
Indicate that something has happend in the app (event). Actions have a name (type) and optional data (payload).

### Reducers
Function how the state changes in response to an action (kind of action / event handler).
A Reducer does *not modify* state directly- it *always* returns a *new* state.
Therefore a `...` (spread operator) is used in the example.
It is not changing its input paramters.  The type of the action is handled inside a `switch` statement.

### Selectors
Selectors are shortcuts to *select* a state and get complex data from it.
Seelctors can be compared to a SELECT satement of an SQL-Query.

## This project
This projects sets a up these elements. 
The goal is to store a simple *messgae queue* for the application and of course to display these messages in a component.
For each Flux/ Redux element there is a seperate folder.

- The Message interface consists of a *message* and a *log date* (models/message.ts)
- The basic **store** is defined in store/message-store.ts
- Some basic **actions** (Add / Clear) can be found in actions/message-actions.ts
- The reducer to handle thes actions can be found in reducers/message-reducers.ts
- Some **selectors** can be found in selectors/selectors.ts 

The app.component holds a simple observable to listen to our messages using the `async` pipe.
And of course theres a little gui to make the **actions** work for the users.

**Overview**

```
AppComponent
  -> dispatch (action) 
    -> reducer handles action 
      -> updates states 
        -> AppComponent view gets updated (async pipe)
  ```

## How to start
Just run `ng serve` to build the project.
Play with the actions.
See the **states** in the console output.
You should install the browser extensions to better see the states and for undo/ redo. 
Look [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
Install, Press F12, see tab "Redux".

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Next step 1 - where to update data in a real db?
Where do we update a real database or make a call to an HTTP-Server when reducers do not change data?
Of course this could be done in a component before dispatching the action.

```ts
this.saveData(data) // POST request to server
  .map(res => this.store.dispatch(action)
  .subscribe()
```
For ngrx an operation like an HTTP call is a **side effect**.
If the component should not care about this side effect we can use [ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md).
With ngrx/effects you can isolate this 'side effect' from the component.

But: using ngrx effects can lead to much more boilerplate code (with kind of strange syntax if you ask me).
A good article can be found here:
[ngrx and side effects- how and how not to](https://medium.com/@m3po22/stop-using-ngrx-effects-for-that-a6ccfe186399)

## Next step 2 - reduce boilerplate code
To reduce the amount of boilerplate code for bigger stores have a look at [ngrx/entity](https://ngrx.io/guide/entity).

## Running unit tests
Actually i do not care for testing here (shame on me).
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help
[Youtube Quickstart](https://www.youtube.com/watch?v=f97ICOaekNU)
