import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../app/Components/Atoms/button/button.component';
import { CardComponent } from '../app/Components/Molecules/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from '../app/Components/Views/about/about.component';
import { routes } from './app.routes';
import { HomeComponent } from '../app/Components/Views/home/home.component';
import { InputComponent } from '../app/Components/Atoms/input/input.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent ,
    HomeComponent,
    AboutComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [AppComponent] // add AppComponent to bootstrap
})
export class AppModule { }
