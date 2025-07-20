import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-of-element',
  imports: [],
  templateUrl: './best-of-element.component.html',
  styleUrl: './best-of-element.component.css'
})
export class BestOfElementComponent {
  constructor(private router:Router) {}
  navigateToPage(base:string,sec:string,third:string|null) {
    this.router.navigate([base,sec,third]);
  }

  @Input() title!: string;
  @Input() photo!: string;
  @Input() categories!: {name:string, qtd:number, img:string}[];
  @Input() products!: {name:string, price:string, img:string}[];
}
