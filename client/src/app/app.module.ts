import { CovalentLayoutModule } from '@covalent/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module'; //TODO: Create app.routing

// Feature Modules
import { SDKBrowserModule } from './shared/sdk/index';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    CovalentLayoutModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),  // Loopback SDK builder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
