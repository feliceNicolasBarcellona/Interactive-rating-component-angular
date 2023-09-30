import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {
  @Input() rating: number | null = null
  @Input() illustrationThankYou: string | null = null
}
