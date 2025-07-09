import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../category-banner/category-banner.component";

@Component({
  selector: 'app-banners-section',
  imports: [CategoryBannerComponent],
  templateUrl: './banners-section.component.html',
  styleUrl: './banners-section.component.css'
})

export class BannersSectionComponent {
  // Adicionar imagens para cada elemento faltante
  banners = [
    {
      title: 'PERIFÉRICOS',
      photo: '',
      products: [
        {name: 'Monitores', qtd: 28, img: '' },
        {name: 'Mouses', qtd: 12, img: '' },
        {name: 'Controles', qtd: 9, img: '' },
        {name: 'Teclados', qtd: 30, img: '' },
      ]
    },
    {
      title: 'GAMING',
      photo: '',
      products: [
        {name: 'Desktops', qtd: 14, img: '' },
        {name: 'Notebooks', qtd: 32, img: '' },
        {name: 'Consoles', qtd: 8, img: '' },
        {name: 'Portáteis', qtd: 9, img: '' },
      ]
    },
    {
      title: 'JOGOS',
      photo: '',
      products: [
        {name: 'RPGs', qtd: 145, img: '' },
        {name: 'Ação', qtd: 121, img: '' },
        {name: 'Horror', qtd: 32, img: '' },
        {name: 'Shooters', qtd: 81, img: '' },
      ]
    }
  ]
}
