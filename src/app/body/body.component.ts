import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],  
})
export class BodyComponent implements OnInit {

  constructor(private _trackService:TrackServiceService) {       
  }

  ngOnInit() {
  }
}