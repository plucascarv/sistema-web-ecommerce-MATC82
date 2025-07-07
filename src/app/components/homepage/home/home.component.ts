import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { MainComponent } from '../main/main.component';
import { BrandsCategoriesComponent } from '../brands-categories/brands-categories.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainComponent, BrandsCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
