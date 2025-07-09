import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-of-element',
  imports: [],
  templateUrl: './best-of-element.component.html',
  styleUrl: './best-of-element.component.css'
})
export class BestOfElementComponent {
  @Input() title!: string;
  @Input() photo!: string;
  @Input() categories!: {name:string, qtd:number, img:string}[];
  @Input() products!: {name:string, price:number, img:string}[];
}
