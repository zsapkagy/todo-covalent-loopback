import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmEditComponent } from './om-edit.component';

const routes: Routes = [
  { path: '', component: OmEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmEditRoutingModule { }

export const routedComponents = [OmEditComponent];
