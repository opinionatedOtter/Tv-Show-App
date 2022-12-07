import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DetailedTvShow, DetailedTvShows, TvShow, TvShows} from "../../model/DetailedTvShow";
import {FirebaseService} from "../api/firebase.service";
import {TvMazeApiService} from "../api/tv-maze-api.service";
import {AddShowDto} from "../../model/addShowDto";
import {DocumentReference} from "@angular/fire/compat/firestore/interfaces";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  collection = "table_tv_show"

  constructor(private showApi: TvMazeApiService, private repo: FirebaseService) {
  }

  getTvShows(): Observable<TvShows> {
    return this.repo.subscribeToCollection<TvShow>(this.collection, 'uid');
  }

  addTvShow(show: AddShowDto): Promise<AddShowDto> {
    return new Promise<AddShowDto>((resolve, reject) => {
      this.repo.saveInCollection(this.collection, show)
        .then(refData => resolve(show))
        .catch(e => reject(e))
    })
  }

  deleteTvShow(show: TvShow): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.repo.deleteInCollection(this.collection, show.uid)
        .then(refData => resolve())
        .catch(e => reject(e))
    })
  }



}
