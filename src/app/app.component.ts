import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interactive-rating-component-main-angular';

  rating: number | null = null
  active: number | null = null;
  toggle: boolean = true;

  onSetActive(val: number) {
    this.active = val;
  }

  onFormSubmitted(rating: number) {
    this.rating = rating;
    this.toggle = !this.toggle
  }

}
