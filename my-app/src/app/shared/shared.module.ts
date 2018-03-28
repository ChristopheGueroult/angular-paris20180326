import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    NavComponent,
    StateDirective,
    FormComponent
  ]
})
export class SharedModule { }
