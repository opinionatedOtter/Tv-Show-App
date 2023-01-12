import {Injectable, TemplateRef} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor() { }

  toasts: Toast[] = [];

 /*
  trashToast() {
    this.toasts.splice(0, this.toasts.length);
  }*/

  thisGuyIsToast(toast: Toast) {
   // this.toasts = this.toasts.filter((t) => t.text !== toast.text);
  }

  toastIt(text: string, color: string) {
    this.toasts.push({text, color})
  }


  getToasts(): Toast[] {
    return this.toasts;
  }
}

export type Toast = {
  text: string
  color: string
}
