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
}
