import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import {
  CovalentLoadingModule,
  /*CovalentNotificationsModule,*/ CovalentLayoutModule, CovalentMenuModule,
  /*CovalentSearchModule,*/ CovalentDialogsModule,
} from '@covalent/core';

import {
  MdButtonModule, MdIconModule, MdMenuModule, MdSnackBarModule, MdRadioModule
} from '@angular/material';

import { DonePipe } from "app/shared/done.pipe";
import { CountPipe } from "app/shared/count.pipe";
import { PriorityClassPipe } from "app/shared/priority-class.pipe";

const ANGULAR_MODULES: any[] = [
  CommonModule, FormsModule, ReactiveFormsModule,
];

const MATERIAL_MODULES: any[] = [
  MdButtonModule, MdIconModule, MdMenuModule, MdSnackBarModule, MdRadioModule,
];

const COVALENT_MODULES: any[] = [
  CovalentLoadingModule, CovalentLayoutModule, CovalentMenuModule, CovalentDialogsModule,
];

const DECLARATIONS: any[] = [
    DonePipe,
    CountPipe,
    PriorityClassPipe,
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
