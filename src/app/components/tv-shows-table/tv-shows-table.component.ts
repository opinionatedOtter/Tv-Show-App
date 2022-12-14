import {Component} from '@angular/core';
import {DetailedTvShow, DetailedTvShows, TvShow, TvShows} from "../../model/DetailedTvShow";
import {TvShowsService} from "../../service/domain/tv-shows.service";

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-table.component.html',
  styleUrls: ['./tv-shows-table.component.scss']
})
export class TvShowsTableComponent {

  tvShows: TvShows = [];
  detailedShow?: DetailedTvShow;

  constructor(private tvShowsService: TvShowsService) {
  }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.tvShowsService.getTvShows()
      .subscribe(shows => {
        this.tvShows = shows
      });
  }

  showDetailedView(uid: string): void {
    this.tvShowsService.getDetailedView(this.tvShows.find(s => s.uid === uid)!)
      .then(r => this.detailedShow = r)
      .catch(e => console.log(e))
  }

}
