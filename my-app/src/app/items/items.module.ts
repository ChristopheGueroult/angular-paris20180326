import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent
  ]
})
export class ItemsModule { }
