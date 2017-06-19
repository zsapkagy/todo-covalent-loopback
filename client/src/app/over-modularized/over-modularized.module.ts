import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverModularizedComponent } from './over-modularized.component';
import { OverModularizedRoutingModule } from "app/over-modularized/over-modularized-routing.module";

@NgModule({
  imports: [
    CommonModule,
    OverModularizedRoutingModule
  ],
  declarations: [OverModularizedComponent]
})
export class OverModularizedModule { }
