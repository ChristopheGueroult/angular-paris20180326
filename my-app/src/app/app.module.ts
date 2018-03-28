import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { Page404Module } from './page404/page404.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { CollectionService } from './core/services/collection/collection.service';
import { EditResolverService } from './core/services/edit-resolver/edit-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Page404Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService, EditResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
