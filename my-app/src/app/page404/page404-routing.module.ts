import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class Page404RoutingModule { }
