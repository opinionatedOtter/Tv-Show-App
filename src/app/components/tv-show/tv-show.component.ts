import {Component, Input} from '@angular/core';
import {DetailedTvShow, TvShow} from "../../model/DetailedTvShow";
import {TvShowsService} from "../../service/domain/tv-shows.service";

@Component({
  selector: '[my-tr]',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent {
  @Input() tvShow!: TvShow;

  constructor(private tvShowService: TvShowsService) {
  }


  onDelete(): void {
    this.tvShowService.deleteTvShow(this.tvShow)
      .then(() => console.log("deleted"))
      .catch(e => console.log(e))
  }
}
