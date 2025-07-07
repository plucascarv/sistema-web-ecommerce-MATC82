import { Component } from '@angular/core';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { HeaderSupernavComponent } from '../header-supernav/header-supernav.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  imports: [HeaderNavComponent, HeaderSupernavComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
