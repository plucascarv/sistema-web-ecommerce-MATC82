import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../ad.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  ads!:{name:string, img:string}[];

  constructor(private adService:AdService) {}

  ngOnInit() {
    this.ads = this.adService.getRandomAds(2);
  }

  categories = ['Notebooks', 'Desktops', 'Controles', 'Teclados', 'Mouses e Mouspeads', 'Monitores', 'Acessórios', 'Jogos', 'Action Figures', 'VR', 'Peças', 'Armazenamento USB'];

}
