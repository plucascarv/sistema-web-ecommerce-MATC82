import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-banner',
  imports: [RouterLink],
  templateUrl: './category-banner.component.html',
  styleUrl: './category-banner.component.css'
})
export class CategoryBannerComponent {
  @Input() title!: string;
  @Input() photo!: string;
  @Input() products!: {name:string, qtd:number, img:string}[];
}
