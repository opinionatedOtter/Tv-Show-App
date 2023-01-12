import { Component } from '@angular/core';
import {Toast, ToastService} from "../../service/rendering/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(private toastService: ToastService) {
  }

  toasts?: Toast[];

  ngOnInit(){
    this.toasts = this.toastService.getToasts();
  }

  remove(){

}

}
