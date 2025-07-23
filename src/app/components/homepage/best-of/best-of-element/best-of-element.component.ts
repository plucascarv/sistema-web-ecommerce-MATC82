import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-of-element',
  imports: [RouterLink],
  templateUrl: './best-of-element.component.html',
  styleUrl: './best-of-element.component.css'
})
export class BestOfElementComponent {
  @Input() title!: string;
  @Input() photo!: string;
  @Input() categories!: {name:string, qtd:number, img:string}[];
  @Input() products!: {name:string, price:string, img:string}[];
}
