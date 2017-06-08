import { CovalentLayoutModule } from '@covalent/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
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
import { DonePipe } from './todo/todo-footer/done.pipe';
import { CountPipe } from './todo/todo-footer/count.pipe';
import { MdIconModule, MdButtonModule } from "@angular/material";
import { PriorityClassPipe } from './todo/todo-list/priority-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    DonePipe,
    CountPipe,
    PriorityClassPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CovalentLayoutModule,
    FormsModule,
    SDKBrowserModule.forRoot(),  // Loopback SDK builder

    // Shared modules
    MdIconModule, MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
