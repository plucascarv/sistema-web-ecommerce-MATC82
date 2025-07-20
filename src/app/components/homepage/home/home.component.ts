import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { BrandsCategoriesComponent } from '../brands-categories/brands-categories.component';
import { AboutComponent } from "../about/about.component";
import { DayDealComponent } from '../day-deal/day-deal.component';
import { BrandNewComponent } from "../brand-new/brand-new.component";
import { BestOfSectionComponent } from '../best-of/best-of-section/best-of-section.component';
import { BannersSectionComponent } from '../banners/banners-section/banners-section.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, BrandsCategoriesComponent, AboutComponent, DayDealComponent, BrandNewComponent, BestOfSectionComponent, BannersSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
