import { Component } from '@angular/core';
import { Tech } from '../../../Data/array';
import { DataService } from '../../../Data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  techNames!: Tech[];

  constructor(private dataService: DataService) {
    this.techNames = this.dataService.getTechNames();
    console.log(this.techNames.filter((tech) => tech.name === 'Angular'));
  }

  ngOnInit(): void {
    this.techNames = this.dataService.getTechNames();
  }

  onClick() {
    this.dataService.onClick(this.techNames);
  }
}
