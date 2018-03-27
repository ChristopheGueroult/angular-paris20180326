import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../../core/services/collection';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
