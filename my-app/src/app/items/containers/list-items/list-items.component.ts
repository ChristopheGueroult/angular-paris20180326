import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  collection$: Observable<Item[]>;
  // sub: Subscription;
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    // this.sub = this.collectionService.collection$.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.collectionService.collection$;
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
