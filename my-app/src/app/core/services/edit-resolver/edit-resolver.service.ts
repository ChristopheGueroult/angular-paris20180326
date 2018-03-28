import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../collection/collection.service';
import 'rxjs/add/operator/take';

@Injectable()
export class EditResolverService implements Resolve<Observable<Item>> {
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = route.paramMap.get('id');
    return this.collectionService.getItem(id).take(1).map((data) => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/items/list']);
        return null;
      }
    });
  }

}
