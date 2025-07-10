import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { MainComponent } from '../main/main.component';
import { BrandsCategoriesComponent } from '../brands-categories/brands-categories.component';
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainComponent, BrandsCategoriesComponent, AboutComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
