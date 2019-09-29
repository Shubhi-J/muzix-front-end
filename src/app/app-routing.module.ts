import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchedTracksComponent } from './searched-tracks/searched-tracks.component';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';


const routes: Routes = [
  {path: 'searchTrack/:search', component:SearchedTracksComponent},
  {path: 'favoriteTracks', component:FavoriteTracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
