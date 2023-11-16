import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() data!: any[];
}
