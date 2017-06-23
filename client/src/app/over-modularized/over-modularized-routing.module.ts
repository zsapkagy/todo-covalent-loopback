import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverModularizedComponent } from './over-modularized.component';
import { OmListComponent } from "app/over-modularized/om-list/om-list.component";

const routes: Routes = [
  { path: '',
    component: OverModularizedComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OmListComponent },
      { path: 'add', loadChildren: './om-edit/om-edit.module#OmEditModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverModularizedRoutingModule { }

export const routedComponents = [OverModularizedComponent];
