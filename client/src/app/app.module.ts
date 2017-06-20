import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module'; //TODO: Create app.routing

// Core, shared modules
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
import { SDKBrowserModule } from './shared/sdk/index';

// Feature Modules
import { TodoModule } from "app/todo/todo.module";
import { OverModularizedModule } from "app/over-modularized/over-modularized.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    AppRoutingModule,
    SharedModule,
    CoreModule,
    SDKBrowserModule.forRoot(),  // Loopback SDK builder

    // App modules
    TodoModule,
    OverModularizedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
