import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { Page404Module } from './page404/page404.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    ItemsModule,
    AppRoutingModule,
    Page404Module
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
