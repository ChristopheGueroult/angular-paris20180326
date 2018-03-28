import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.item = data['item'];
      console.log(this.item);
    });
  }

  update(item: Item): void {
    this.collectionService.update(item);
  }

}
