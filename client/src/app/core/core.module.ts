import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MainComponent } from "app/core/main/main.component";
import { PageNotFoundComponent } from "app/core/page-not-found.component";
import { SharedModule } from "app/shared/shared.module";
import { throwIfAlreadyLoaded } from "app/core/module-import-guard";
import { TodosService } from "app/core/todos.service";
import { TodosResolve } from "app/core/todos.resolve";

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
  ],
  providers: [
    TodosService,
    TodosResolve,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
