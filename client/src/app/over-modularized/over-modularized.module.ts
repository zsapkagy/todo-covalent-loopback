import { NgModule } from '@angular/core';
import { OmListModule } from "app/over-modularized/om-list/om-list.module";
import { OverModularizedComponent } from './over-modularized.component';
import { OverModularizedRoutingModule } from "app/over-modularized/over-modularized-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    OverModularizedRoutingModule,
    OmListModule
  ],
  declarations: [
    OverModularizedComponent
  ]
})
export class OverModularizedModule { }
