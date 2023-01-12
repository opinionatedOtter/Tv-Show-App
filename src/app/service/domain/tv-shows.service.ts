import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DetailedTvShow, TvShow, TvShows} from "../../model/DetailedTvShow";
import {FirebaseService} from "../api/firebase.service";
import {TvMazeApiService} from "../api/tv-maze-api.service";
import {AddShowDto} from "../../model/addShowDto";
import {ToastService} from "../rendering/toast.service";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  collection = "table_tv_show"

  constructor(private showApi: TvMazeApiService, private repo: FirebaseService, private toastService: ToastService) {
  }

  getTvShows(): Observable<TvShows> {
    return this.repo.subscribeToCollection<TvShow>(this.collection, 'uid');
  }

  addTvShow(show: AddShowDto): Promise<AddShowDto> {
    return new Promise<AddShowDto>(
      (resolve, reject) => {
      this.showApi.showIsValid(show.name || "", show.id || 1)
        .then(show =>{
          if(show){
            this.repo.saveInCollection(this.collection, show)
              .then(refData => resolve(show))
              .catch(e => reject(e))
          } else {
            reject("no show with this id and name")
            this.toastService.toastIt("Could not add show: no show with this id and name", "danger")
          }
          }
        )
    })
  }

  deleteTvShow(showUid: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.repo.deleteInCollection(this.collection, showUid)
        .then(refData => resolve())
        .catch(e => reject(e))
    })
  }


  getDetailedView(show: TvShow): Promise<DetailedTvShow | undefined> {
    return this.showApi.getDetailedShow(show);
  }


  replace(oldShow: TvShow, newShow: TvShow): Promise<DetailedTvShow | undefined> {
    return new Promise<DetailedTvShow | undefined>((resolve, reject) => {
      this.showApi.showIsValid(newShow.name, Number.parseInt(newShow.id))
        .then(
          async (show) => {
            if (show) {
              await this.repo.update(this.collection, oldShow.uid, show)
              await resolve(show);
            } else {
              resolve(undefined);
            }
          }
        )
        .catch((e) => reject(e))
    })
  }
}
