import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-new',
  imports: [RouterLink],
  templateUrl: './brand-new.component.html',
  styleUrl: './brand-new.component.css'
})
export class BrandNewComponent {
  items = [
    {
      name: "Lançamento do novo The Witcher",
      img: "/brand-new/witcher.png",
      info: "A franquia volta com o novo título, The Witcher 4. Lançado em plataformas digitais inicialmente, e primeiro na Mercurio!"
    }
  ]
}
