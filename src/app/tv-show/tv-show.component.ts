import {Component, Input} from '@angular/core';
import {TvShow} from "../model/TvShow";

@Component({
  selector: '[my-tr]',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent {
  @Input() tvShow!: TvShow;
}
