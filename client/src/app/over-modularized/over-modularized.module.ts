import { NgModule } from '@angular/core';

import { OmEditModule } from "app/over-modularized/om-edit/om-edit.module";
import { OmListModule } from "app/over-modularized/om-list/om-list.module";
import { OverModularizedComponent } from './over-modularized.component';
import { OverModularizedRoutingModule } from "app/over-modularized/over-modularized-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    OverModularizedRoutingModule,
    OmListModule,
    OmEditModule
  ],
  declarations: [
    OverModularizedComponent
  ]
})
export class OverModularizedModule { }
