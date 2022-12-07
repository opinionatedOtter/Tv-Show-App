import { Injectable } from '@angular/core';
import {DetailedTvShow, DetailedTvShows} from "../../model/DetailedTvShow";
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TvMazeApiService {

  private showApi = "https://api.tvmaze.com/singlesearch/shows?q=girls";

  constructor(private http: HttpClient) { }

  x(){
    return this.http.get<DetailedTvShow>(this.showApi)
      .pipe(
        catchError((e): Observable<DetailedTvShows> => {
          console.log(e);
          return of([]);
        }),
        map(s => Array.of(s) as DetailedTvShows)
      );
  }
}
