import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ad',
  imports: [RouterLink],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.css'
})
export class AdComponent {
  @Input() type: 'type1' | 'type2' = 'type1';
  @Input() brand!: string;
  @Input() name!: string;
  @Input() price?: string;
  @Input() link?: string;
}
