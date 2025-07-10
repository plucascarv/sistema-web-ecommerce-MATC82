import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands-categories',
  imports: [],
  templateUrl: './brands-categories.component.html',
  styleUrl: './brands-categories.component.css'
})
export class BrandsCategoriesComponent {
  constructor(private router: Router) {}
  
  brands:string[] = []
  categories = [
    {name: "Notebooks", img:''},
    {name: "PCs Gamer", img:''},
    {name: "Headsets", img:''},
    {name: "Monitores", img:''}
  ]

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item])
  }
}
