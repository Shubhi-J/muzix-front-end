import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ITrack } from '../Track';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-favorite-tracks',
  templateUrl: './favorite-tracks.component.html',
  styleUrls: ['./favorite-tracks.component.css']
})
export class FavoriteTracksComponent implements OnInit {

  public favoriteTracks=[];
  public putTracks=[];
  public deletedTracks=[];

  constructor(private _trackService:TrackServiceService,private activatedRoute: ActivatedRoute
    ,private router:Router,public dialog: MatDialog) { 
      
  }

  ngOnInit() {
    // on init, get all favorite Tracks
    this.getFavoriteTracks();
  }

  // for update, open the dialog
  openDialog(id:number,name:string,comment:string): void {
    // this will go to the UpdateModalComponent
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      width: '250px',
     // this will send the data to UpdateModalComponent
      data: {id: id,name: name, comment: comment}
    });

    // this method is invoked after the modal is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // if there is any change in the comment, then call the service method to update
      if(result){
      comment = result;
      // call the service method to update
      this._trackService.putFavoriteTracks(new ITrack(id,name,comment)).subscribe(data=> this.putTracks = data);
      this.getFavoriteTracks();
      }});
    
  }

    // to get all tracks from local database
    getFavoriteTracks(){
      // call service method to get favorite tracks
      this._trackService.getFavoriteTracks().subscribe(data=> this.favoriteTracks = data);
       }

    // to delete a track by id
    deleteFavoriteTracks(id:number){
      // call the service method to delete
     this._trackService.deleteFavoriteTracks(id).subscribe(data=> this.deletedTracks = data);
      alert("deleted successfully");
      // refresh the page after some operation is performed
      //this.router.navigate(['/favoriteTracks']);
      //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      //this.getFavoriteTracks();
    }
}