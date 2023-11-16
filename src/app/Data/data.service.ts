import { Injectable } from '@angular/core';
import { Tech } from './array';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private techNames!: Tech[];

  setTechNames(techNames: Tech[]) {
    this.techNames = techNames;
  }

  getTechNames() {
    return this.techNames;
  }

  onClick(techNames: Tech[]) {
    techNames.map((tech) => {
      if (tech.name === 'Angular') {
        tech.name = 'React';
      } else if (tech.name === 'React') {
        tech.name = 'Vue';
      } else if (tech.name === 'Vue') {
        tech.name = 'Angular';
      }
    });
  }

}
