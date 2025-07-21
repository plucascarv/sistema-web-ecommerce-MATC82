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
    {name: "Lançamento do novo The Witcher", img: "/brand-new/witcher.png", info: "A franquia volta com o novo título, The Witcher 4. Lançado em plataformas digitais inicialmente, e primeiro na Mercurio!"},
    {name: "Red Dead Redemption 2", img: "/brand-new/red.jpg", info: "Promoção exclusiva! Aproveite o melhor preço do mercado para adquirir esta obra!"},
    {name: "Disponível o Nintendo Switch 2", img: "/brand-new/switch.avif", info: "O mais novo e melhor console portátil do mercado, disponível primeiro na Mercurio!"},
    {name: "Elden Ring Nightrein está no ar!", img: "/brand-new/elden.jpg", info: "Uma nova experiência para um dos jogos mais bem avaliados da história!"}
  ]
}
