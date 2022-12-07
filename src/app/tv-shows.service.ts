import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {TvShow, TvShows} from "./model/TvShow";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private showApi = "https://api.tvmaze.com/singlesearch/shows?q=girls";

  constructor(private http: HttpClient,) {
  }

  getTvShows(): Observable<TvShows> {
    return this.http.get<TvShow>(this.showApi)
      .pipe(
        catchError((e): Observable<TvShows> => {
          console.log(e);
          return of([]);
        }),
        map(s => Array.of(s) as TvShows)
      );
  }
}
