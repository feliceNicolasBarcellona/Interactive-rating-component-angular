import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interactive-rating-component-main-angular';

  rate: number | null = null;
  active: number | null = null;
  toggle: boolean = true;

  setActive(val: number) {
    this.active = val;
  }

  submit(form: NgForm) {
    this.rate = form.value.rate
    this.toggle = !this.toggle
  }
}
