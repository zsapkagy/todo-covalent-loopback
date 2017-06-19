import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from "app/page-not-found.component";

// Routing Module
import { AppRoutingModule } from './app-routing.module'; //TODO: Create app.routing

import { SharedModule } from "app/shared/shared.module";
import { SDKBrowserModule } from './shared/sdk/index';

// Feature Modules
import { TodoModule } from "app/todo/todo.module";
import { OverModularizedModule } from "app/over-modularized/over-modularized.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SDKBrowserModule.forRoot(),  // Loopback SDK builder

    SharedModule,

    // App modules
    TodoModule,
    OverModularizedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
