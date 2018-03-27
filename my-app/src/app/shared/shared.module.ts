import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';

@NgModule({
  imports: [
    CommonModule
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
