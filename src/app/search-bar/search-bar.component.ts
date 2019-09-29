import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public searchedTracks=[];
  constructor(private _trackService:TrackServiceService,private router: Router) {}

  ngOnInit() {
  }

  getSearchedTracks(search:string){
    //this._trackService.getSearchedTrack(search).subscribe(data=>{this.searchedTracks=data; console.log(this.searchedTracks);});
  this.router.navigate(['/searchTrack',search]);
  
  }

}
