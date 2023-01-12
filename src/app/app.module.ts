import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TvShowsTableComponent} from './components/tv-shows-table/tv-shows-table.component';
import {HttpClientModule} from "@angular/common/http";
import {TvShowComponent} from './components/tv-show/tv-show.component';
import {AddShowComponent} from './components/add-show/add-show.component';
import {FormsModule} from "@angular/forms";
import {DetailedShowViewComponent} from './components/detailed-show-view/detailed-show-view.component';
// Firebase
import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsTableComponent,
    TvShowComponent,
    AddShowComponent,
    DetailedShowViewComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
