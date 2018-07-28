import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from './models/message';
import { Store } from '@ngrx/store';
import * as message from './actions/message-actions';
import * as messageReducers from './reducers/message-reducer';
import { MessageStore } from './stores/message-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myMessages$: Observable<any>;
  textInput = '';

  /**
   * Inject a new storage for our messages
   * @param store
   */
  constructor(private store: Store<MessageStore>) {
  }

  ngOnInit() {
   this.myMessages$ = this.store.select(store => store.state.messages);

   // this.myCounts$ = this.store.select('count');
  }

  /**
   * add a new message --> dispatch
   */
  add() {
    const newMessage = <Message>{};
    newMessage.message = this.textInput;
    newMessage.logDate = new Date();

    this.store.dispatch(new message.AddAction(newMessage));
  }

  /**
   * Clear messages --> dispatch
   */
  reset() {
    this.store.dispatch(new message.ClearAction());
  }
}
