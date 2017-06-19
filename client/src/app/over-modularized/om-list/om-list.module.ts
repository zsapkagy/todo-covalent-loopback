import { NgModule } from '@angular/core';
import { OmListComponent } from './om-list.component';
import { OmListItemComponent } from "app/over-modularized/om-list/om-list-item/om-list-item.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    OmListComponent,
    OmListItemComponent
  ],
  exports: [
    OmListComponent
  ],
})
export class OmListModule { }
