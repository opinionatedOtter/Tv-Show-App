import { Component } from '@angular/core';
import {TvShows} from "../model/TvShow";
import {TvShowsService} from "../tv-shows.service";

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent {

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
