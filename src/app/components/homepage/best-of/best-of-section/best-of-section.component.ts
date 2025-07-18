import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestOfElementComponent } from '../best-of-element/best-of-element.component';

@Component({
  selector: 'app-best-of-section',
  imports: [BestOfElementComponent, CommonModule],
  templateUrl: './best-of-section.component.html',
  styleUrl: './best-of-section.component.css'
})
export class BestOfSectionComponent {
  elements = [
    {
      title: 'COMPUTADORES & NOTEBOOKS',
      img: '',
      categories: [
        {name: 'Macbook', qtd: 21, img: ''},
        {name: 'Desktops', qtd: 14, img: ''},
        {name: 'De Escritório', qtd: 32, img: ''},
        {name: 'Notebooks 15"', qtd: 25, img: ''},
        {name: 'Alienware', qtd: 9, img: ''},
        {name: 'Usados', qtd: 45, img: ''}
      ],
      products: [
        {name: "MacBook Air 14", price:"4299,99", img:"/deal/front.png"}
      ] // TODO: consumir esses elementos da api
    }
  ]
}
