import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ],
  declarations: [
    NavComponent,
    StateDirective
  ],
  exports: [
    NavComponent,
    StateDirective
  ]
})
export class SharedModule { }
