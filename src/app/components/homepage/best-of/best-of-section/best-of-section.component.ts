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
      img: '/best-of/banner1.png',
      categories: [
        {name: 'Macbook', qtd: 21, img: '/best-of/mac.webp'},
        {name: 'Desktops', qtd: 14, img: '/best-of/desktop.png'},
        {name: 'De Escritório', qtd: 32, img: '/best-of/office.jpg'},
        {name: 'Notebooks 15"', qtd: 25, img: '/best-of/note15.webp'},
        {name: 'Alienware', qtd: 9, img: '/best-of/alien.jpg'},
        {name: 'Usados', qtd: 45, img: '/best-of/used.webp'}
      ],
      products: [
        {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:"4299,99", img:"/deal/front.jpg"}
      ]
    }
  ]
}
