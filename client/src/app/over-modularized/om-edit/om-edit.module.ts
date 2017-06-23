import { NgModule } from '@angular/core';

import { OmEditComponent } from './om-edit.component';
import { OmEditRoutingModule } from "app/over-modularized/om-edit/om-edit-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    OmEditRoutingModule,
    SharedModule,
  ],
  declarations: [OmEditComponent]
})
export class OmEditModule { }
