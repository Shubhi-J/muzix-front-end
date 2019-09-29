import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialModule } from './material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';
import { SearchedTracksComponent } from './searched-tracks/searched-tracks.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchBarComponent,
    LogoComponent,
    HeaderComponent,
    BodyComponent,
    FavoriteTracksComponent,
    SearchedTracksComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    UpdateModalComponent
  ],
  exports: [
    MatButtonModule, MatCheckboxModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
