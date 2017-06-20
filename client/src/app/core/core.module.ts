import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MainComponent } from "app/core/main/main.component";
import { PageNotFoundComponent } from "app/core/page-not-found.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],
  declarations: [
    MainComponent,
    PageNotFoundComponent,
  ],
  exports: [
    MainComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
