import {Component} from '@angular/core';
import {AddShowDto} from "../../model/addShowDto";
import {TvShowsService} from "../../service/domain/tv-shows.service";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss']
})
export class AddShowComponent {

  constructor(private showsService: TvShowsService) {
  }

  model = new AddShowDto();
  alert = false;

  onSubmit() {
    this.showsService.addTvShow(this.model)
      .then(() => {
        this.model = new AddShowDto();
        this.alert = false;
      })
      .catch(e => {
        this.alert = true;
        console.log(e)
      })
  }

  closeAlter() {
    this.alert = false;
  }
}
