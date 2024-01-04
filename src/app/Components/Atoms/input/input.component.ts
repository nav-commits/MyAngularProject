import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  @Output() keyup = new EventEmitter<KeyboardEvent>();


}
