import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/homepage/about/about.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title = 'app-ecommerce-web';
}