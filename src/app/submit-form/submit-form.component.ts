import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css'],
})
export class SubmitFormComponent {
  @Output() rate = new EventEmitter<number>();
  @Output() val = new EventEmitter<number>()
  @Input() active: number | null = null
  @Input() iconStar: string | null = null

  submit(form: NgForm) {
    let rate = form.value.rate;
    this.rate.emit(rate);
  }

  setActive(val: number){
    this.active = val
  }
}
