import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
    });
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onKeyup(event: KeyboardEvent): void {
    console.log(event);
  }

}
