import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  categories:string[] = ['Notebooks', 'Desktops', 'Controles', 'Teclados', 'Mouses e Mouspeads', 'Monitores', 'Acessórios', 'Jogos', 'Peças'];

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item]);
  }

  socials:string[] = [
    "/socials/twitter.svg",
    "/socials/instagram.svg",
    "/socials/facebook.svg",
    "/socials/whatsapp.svg",
    "/socials/youtube.svg"];
}
