import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { DonePipe } from "app/shared/done.pipe";
import { CountPipe } from "app/shared/count.pipe";
import { PriorityClassPipe } from "app/shared/priority-class.pipe";

import {
  // CovalentCommonModule,
  // CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  // CovalentMediaModule,
  CovalentMenuModule,
  // CovalentNotificationsModule,
  // CovalentPagingModule,
  // CovalentSearchModule,
  // CovalentStepsModule,
} from '@covalent/core';

import {
  MdButtonModule,
  // MdCardModule,
  // MdCheckboxModule,
  MdIconModule,
  // MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRadioModule,
  // MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  // MdTabsModule,
  MdToolbarModule,
  // MdTooltipModule,
} from '@angular/material';
import { TodoFooterComponent } from "app/shared/todo-footer/todo-footer.component";


const ANGULAR_MODULES: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const MATERIAL_MODULES: any[] = [
  MdButtonModule,
  // MdCardModule,
  // MdCheckboxModule,
  MdIconModule,
  // MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRadioModule,
  // MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  // MdTabsModule,
  MdToolbarModule,
  // MdTooltipModule,
];

const COVALENT_MODULES: any[] = [
  // CovalentCommonModule,
  // CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  // CovalentMediaModule,
  CovalentMenuModule,
  // CovalentNotificationsModule,
  // CovalentPagingModule,
  // CovalentSearchModule,
  // CovalentStepsModule,
];

const DECLARATIONS: any[] = [
    CountPipe,
    DonePipe,
    PriorityClassPipe,
    TodoFooterComponent,
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
  ],
  declarations: [
    DECLARATIONS
  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    DECLARATIONS,
  ]
})
export class SharedModule { }
