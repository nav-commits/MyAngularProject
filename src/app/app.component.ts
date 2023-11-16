import { Component } from '@angular/core';
import { Tech } from './Data/array';
import { DataService } from './Data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  techNames: Tech[] = [{ name: 'Angular' }, { name: 'React' }, { name: 'Vue' }];

  constructor(private dataService: DataService) {
    this.dataService.setTechNames(this.techNames);
  }

  onClick() {
    this.dataService.onClick(this.techNames);
  }
}
