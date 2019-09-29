import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITrack } from './Track';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {

  public emp=[];
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
  
  constructor(private http:HttpClient) { }

  // get tracks for local database
  getFavoriteTracks(): Observable<ITrack[]>{
    return this.http.get<ITrack[]>("http://172.23.238.220:8080/api/v1/track",{headers: this.headers});
    }

  // post tracks to local database
  postFavoriteTracks(track:ITrack): Observable<ITrack[]>{
  return this.http.post<ITrack[]>("http://172.23.238.220:8080/api/v1/track",track,{headers: this.headers});
    }

  // update track to local database
  putFavoriteTracks(track:ITrack): Observable<ITrack[]>{
    return this.http.put<ITrack[]>("http://172.23.238.220:8080/api/v1/track",track,{headers: this.headers});
    }

  // update track to local database
  deleteFavoriteTracks(id: number): Observable<ITrack[]>{
    return this.http.delete<ITrack[]>("http://172.23.238.220:8080/api/v1/track/"+id,{headers: this.headers});
    }


    // get top tracks from last.fm database
  getAllTracks(): Observable<ITrack[]>{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f3c26820d3e3a856543824cf71da6ebb&format=json")
    .pipe(
 map(data => {
     console.log(data);
        let arr: ITrack[] = [];
        for(var track of data['tracks']['track']){

          arr.push(new ITrack(arr.length+1,track['name'],track['artist']['name']));
        }
        return arr;
   } ));
    
    }

    // get tracks according to search text from last.fm database
    getSearchedTrack(search): Observable<ITrack[]>{
      return this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+search+"&api_key=f3c26820d3e3a856543824cf71da6ebb&format=json")
      .pipe(
        map(data => {   
               console.log(data);
               let arr: ITrack[] = [];
               for(var track of data['results']['trackmatches']['track']){
       
                 arr.push(new ITrack(arr.length+1,track['name'],track['artist']));
               }
               return arr;
         } ));
           
           }
  
}
