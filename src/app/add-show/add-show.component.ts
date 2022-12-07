import {Component} from '@angular/core';
import {AddShowDto} from "../model/addShowDto";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss']
})
export class AddShowComponent {


  model = new AddShowDto();

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
