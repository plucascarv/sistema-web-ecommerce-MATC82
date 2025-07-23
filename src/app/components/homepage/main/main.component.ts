import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  ads!:{name:string, img:string}[];

  constructor(private router: Router, private adService:AdService) {}

  ngOnInit() {
    this.ads = this.adService.getRandomAds(2);
  }

  categories = ['Notebooks', 'Desktops', 'Controles', 'Teclados', 'Mouses e Mouspeads', 'Monitores', 'Acessórios', 'Jogos', 'Action Figures', 'VR', 'Peças', 'Armazenamento USB'];

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item])
  }

}
