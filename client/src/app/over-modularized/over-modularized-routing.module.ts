import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverModularizedComponent } from './over-modularized.component';

const routes: Routes = [
  { path: '', component: OverModularizedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverModularizedRoutingModule { }

export const routedComponents = [OverModularizedComponent];
