import {Component, Input} from '@angular/core';
import {DetailedTvShow} from "../../model/DetailedTvShow";

@Component({
  selector: 'app-detailed-show-view',
  templateUrl: './detailed-show-view.component.html',
  styleUrls: ['./detailed-show-view.component.scss']
})
export class DetailedShowViewComponent {
  @Input() tvShow!: DetailedTvShow;
}
