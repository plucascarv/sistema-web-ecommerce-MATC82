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
  
  brands:string[] = [
    "/brands/amd.svg",
    "/brands/positivo.svg",
    "/brands/corsair.svg",
    "/brands/intel.svg",
    "/brands/logitech.svg",
    "/brands/msi.svg",
    "/brands/razer.svg",
    "/brands/oculus.svg",
    "/brands/xbox.svg",
    "/brands/nvidia.svg"
  ]

  categories = [
    {name: "Notebook", img:'/categories/notebooks.png'},
    {name: "Desktop", img:'/categories/pcs.png'},
    {name: "Headset", img:'/categories/headsets.png'},
    {name: "Monitor", img:'/categories/monitores.jpg'}
  ]

  navigateToPage(item:string) {
    this.router.navigate(['/categories',item])
  }
}
