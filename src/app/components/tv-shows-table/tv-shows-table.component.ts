import { Component } from '@angular/core';
import {DetailedTvShows, TvShows} from "../../model/DetailedTvShow";
import {TvShowsService} from "../../service/domain/tv-shows.service";

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-table.component.html',
  styleUrls: ['./tv-shows-table.component.scss']
})
export class TvShowsTableComponent {

  tvShows: TvShows = [];

  constructor(private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.tvShowsService.getTvShows()
      .subscribe(shows =>{
        console.log(shows);
        this.tvShows = shows
      });
  }

}
