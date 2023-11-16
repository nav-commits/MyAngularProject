import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Components/Views/home/home.component';
import { AboutComponent } from '../app/Components/Views/about/about.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];
