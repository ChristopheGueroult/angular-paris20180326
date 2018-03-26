import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Page404Component
  ],
  exports: [
    Page404Component
  ]
})
export class Page404Module { }
