import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverModularizedComponent } from './over-modularized.component';
import { OverModularizedRoutingModule } from "app/over-modularized/over-modularized-routing.module";
import { OmListItemComponent } from './om-list-item/om-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    OverModularizedRoutingModule
  ],
  declarations: [
    OverModularizedComponent,
    OmListItemComponent
  ]
})
export class OverModularizedModule { }
