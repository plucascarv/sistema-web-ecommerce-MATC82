import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HeaderSupernavComponent } from "./header/header-supernav/header-supernav.component";
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { BrandsCategoriesComponent } from './homepage/brands-categories/brands-categories.component';
import { MainComponent } from './homepage/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderNavComponent, HeaderSupernavComponent, SearchBarComponent, BrandsCategoriesComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title = 'app-ecommerce-web';

  categorias = ['Notebooks', 'Computadores', 'Mouses', 'Teclados', 'Monitores', 'Jogos Digitais', 'Jogos Físicos', 'Monitores', 'Controles', 'Consoles', 'Ferramentas'];
}
