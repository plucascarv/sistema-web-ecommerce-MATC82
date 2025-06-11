import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderSupernavComponent } from "./header-supernav/header-supernav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavComponent, HeaderSupernavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ecommerce-web';
}
