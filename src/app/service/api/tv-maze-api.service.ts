import {Injectable} from '@angular/core';
import {DetailedTvShow, TvShow} from "../../model/DetailedTvShow";
import {catchError, EMPTY} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TvMazeApiService {

  private showApi = "https://api.tvmaze.com/shows/";

  constructor(private http: HttpClient) {
  }

  showIsValid(name: string, id: number): Promise<DetailedTvShow | undefined> {
    return new Promise<DetailedTvShow | undefined>((resolve, reject) => {
      this.http.get<DetailedTvShow>(this.showApi + id)
        .pipe(catchError(err => {
              console.log(err)
              reject(err);
              return EMPTY;
            }
          ),
        ).subscribe(data => {
        resolve(this.validateName(data, name) ? data : undefined)
      });
    })
  }

  private validateName(data: DetailedTvShow, name: string) {
    return data.name.trim().toLowerCase() === name.trim().toLowerCase();
  }

  getDetailedShow(show: TvShow): Promise<DetailedTvShow> {
    return new Promise<DetailedTvShow>((resolve, reject) => {
      this.http.get<DetailedTvShow>(this.showApi + show.id)
        .pipe(
          catchError(err => {
              console.log(err)
              reject(err);
              return EMPTY;
            }
          ),
        ).subscribe(data => {
        resolve(data)
      });
    })
  }
}
