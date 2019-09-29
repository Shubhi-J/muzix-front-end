import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { ITrack } from '../Track';


@Component({
  selector: 'app-searched-tracks',
  templateUrl: './searched-tracks.component.html',
  styleUrls: ['./searched-tracks.component.css']
})
export class SearchedTracksComponent implements OnInit {

  public searchedTracks=[];
  public favoriteTracks:ITrack[];
  public postTracks;

  constructor(private _trackService:TrackServiceService,private activatedRoute: ActivatedRoute) {
  
   }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      let searchString=params.get("search");
     
      this._trackService.getSearchedTrack(searchString).
      subscribe(data=>{this.searchedTracks=data; console.log(this.searchedTracks);});  
    
});

this._trackService.getFavoriteTracks().subscribe(data=> this.favoriteTracks = data);
  }
  postFavoriteTracks(ftack:ITrack){
    
    this._trackService.postFavoriteTracks(new ITrack(this.favoriteTracks[this.favoriteTracks.length-1].id+1,ftack.name,ftack.comment)).subscribe(data=> this.postTracks = data);
    alert("saved successfully");
     }


}
