import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  messageStoreReducers } from './reducers/message-reducer';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot( messageStoreReducers),
    StoreModule.forFeature('messages', messageStoreReducers),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


