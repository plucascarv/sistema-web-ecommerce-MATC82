import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { MainComponent } from '../main/main.component';
import { BrandsCategoriesComponent } from '../brands-categories/brands-categories.component';
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../../footer/footer.component";
import { DayDealComponent } from '../day-deal/day-deal.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainComponent, BrandsCategoriesComponent, AboutComponent, FooterComponent, DayDealComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
