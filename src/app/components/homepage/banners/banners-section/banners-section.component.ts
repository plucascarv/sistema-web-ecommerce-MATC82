import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBannerComponent } from "../category-banner/category-banner.component";

@Component({
  selector: 'app-banners-section',
  imports: [CommonModule, CategoryBannerComponent],
  templateUrl: './banners-section.component.html',
  styleUrl: './banners-section.component.css'
})

export class BannersSectionComponent {
  // Adicionar imagens para cada elemento faltante
  banners = [
    {
      title: 'PERIFÉRICOS',
      photo: '/banners/perifericos/banner.png',
      products: [
        {name: 'Monitores', qtd: 28, img: '/banners/perifericos/monitor.png' },
        {name: 'Mouses', qtd: 12, img: '/banners/perifericos/mouse.png' },
        {name: 'Controles', qtd: 9, img: '/banners/perifericos/controller.png' },
        {name: 'Teclados', qtd: 30, img: '/banners/perifericos/keyboard.png' },
      ]
    },
    {
      title: 'GAMING',
      photo: '/banners/gaming/banner.png',
      products: [
        {name: 'Desktops', qtd: 14, img: '/best-of/desktop.png' },
        {name: 'Notebooks', qtd: 74, img: '/banners/gaming/note.png' },
        {name: 'Consoles', qtd: 8, img: '/banners/gaming/console.png' },
        {name: 'Portáteis', qtd: 9, img: '/banners/gaming/portable.png' },
      ]
    },
    {
      title: 'JOGOS',
      photo: '/banners/jogos/banner.png',
      products: [
        {name: 'RPGs', qtd: 145, img: '/banners/jogos/rpg.jpg' },
        {name: 'Ação', qtd: 121, img: '/banners/jogos/action.jpg' },
        {name: 'Horror', qtd: 32, img: '/banners/jogos/horror.jpg' },
        {name: 'Shooters', qtd: 81, img: '/banners/jogos/shooter.avif' },
      ]
    }
  ]
}
