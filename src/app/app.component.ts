import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from './models/message';
import { Store } from '@ngrx/store';
import * as message from './actions/message-actions';
import * as messageReducers from './reducers/message-reducer';
import { MessageStore } from './stores/message-store';
import * as messageSelectors from './selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myMessages$: Observable<any>;
  myUpperMessages$: Observable<string[]>;
  textInput = '';

  /**
   * Inject a new storage for our messages
   * @param store
   */
  constructor(private store: Store<MessageStore>) {
  }

  /**
   * Default init -
   * due to async pipe in template no subscribe / unsubscribe needed
   */
  ngOnInit() {
   this.myMessages$ = this.store.select(store => store.state.messages);

   this.myUpperMessages$ = this.store.select(messageSelectors.getUpperMessages);

   // this.myCounts$ = this.store.select('count');
  }

  /**
   * add a new message --> dispatch event
   */
  add() {
    const newMessage = <Message>{};
    newMessage.message = this.textInput;
    newMessage.logDate = new Date();

    this.store.dispatch(new message.AddAction(newMessage));
  }

  /**
   * Clear messages --> dispatch event
   */
  reset() {
    this.store.dispatch(new message.ClearAction());
  }
}
