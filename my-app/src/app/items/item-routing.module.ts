import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditItemComponent } from './containers/edit-item/edit-item.component';
import { EditResolverService } from '../core/services/edit-resolver/edit-resolver.service';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'edit/:id', component: EditItemComponent, resolve: { item: EditResolverService} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ItemRoutingModule { }
