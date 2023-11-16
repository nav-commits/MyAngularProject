import { Injectable } from '@angular/core';
import { Tech } from './array';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private techNames!: Tech[];

  setTechNames(techNames: Tech[]) {
    this.techNames = techNames;
  }

  getTechNames() {
    return this.techNames;
  }

  onClick() {
    this.techNames.filter((tech) => {
      if (tech.name === 'Angular') {
        tech.name = 'Angular 12 rocks';
      }
      else if (tech.name === 'React') {
        tech.name = 'React 17 rocks';
      }
      else if (tech.name === 'Vue') {
        tech.name = 'Vue 3 is not sucks';
      }
    });
  }
}
