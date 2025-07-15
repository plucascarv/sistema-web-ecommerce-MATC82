import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdComponent } from '../../ad/ad.component';

@Component({
  selector: 'app-main',
  imports: [AdComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router) {}

  categories = ['Notebooks', 'Desktops', 'Controles', 'Teclados', 'Mouses e Mouspeads', 'Monitores', 'Acessórios', 'Jogos', 'Action Figures', 'VR', 'Peças', 'Armazenamento USB'];

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item])
  }

}
