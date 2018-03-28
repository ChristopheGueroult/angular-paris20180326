import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';

import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;
  constructor(
    private afs: AngularFirestore,
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
   }

  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  set collection$(collection: Observable<Item[]>) {
    this._collection$ = collection;
  }

  // add Item
  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  // update Item
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  // delete Item
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

  // get data on item
  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }
}
