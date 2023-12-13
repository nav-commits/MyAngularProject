import { Component } from '@angular/core';
import { Tech } from '../../../Data/array';
import { DataService } from '../../../Data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  techNames: Tech[] = [{ name: 'Angular' }, { name: 'React' }, { name: 'Vue' }];
  value = '';


  constructor(private dataService: DataService) {
    this.dataService.setTechNames(this.techNames);
  }

  ngOnInit(): void {
    this.techNames = this.dataService.getTechNames();
  }

  onAddItem() {
    this.techNames.push({ name: this.value })
  }


}
