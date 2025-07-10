import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  categories:string[] = ['Notebooks', 'Desktops', 'Controles', 'Teclados', 'Mouses e Mouspeads', 'Monitores', 'Acessórios', 'Jogos', 'Peças'];

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item])
  }
}
