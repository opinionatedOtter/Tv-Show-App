import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import {HttpClientModule} from "@angular/common/http";
import { TvShowComponent } from './tv-show/tv-show.component';
import { AddShowComponent } from './add-show/add-show.component';
import {FormsModule} from "@angular/forms";
import { DetailedShowViewComponent } from './detailed-show-view/detailed-show-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsListComponent,
    TvShowComponent,
    AddShowComponent,
    DetailedShowViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
