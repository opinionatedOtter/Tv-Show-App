import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {DetailedTvShow, TvShow} from "../../model/DetailedTvShow";
import {TvShowsService} from "../../service/domain/tv-shows.service";

@Component({
  selector: '[my-tr]',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent {
  @Input() tvShow!: TvShow;
  @Output() doubleClickEvt = new EventEmitter<string>();
  @HostListener('dblclick')
  onDoubleClick(): void {
    this.doubleClickEvt.emit(this.tvShow.uid);
  }

  editable = false;
  replacementShow: TvShow = {
    id: "",
    uid: "",
    name: ""
  };

  constructor(private tvShowService: TvShowsService) {
  }

  ngOnInit() {
    this.replacementShow = { ...this.tvShow };
  }

  toggleEdit(): void{
    this.editable = !this.editable;
    this.replacementShow = { ...this.tvShow };
  }

  saveShow(): void{
    if (this.replacementShow.id !== this.tvShow.id) {
      this.tvShowService.replace(this.tvShow, this.replacementShow)
        .then(() => this.replacementShow = { ...this.tvShow })
    }
    this.editable = !this.editable;
  }

  deleteShow(): void {
    this.tvShowService.deleteTvShow(this.tvShow.uid)
      .then(() => console.log("deleted"))
      .catch(e => console.log(e))
  }
}
