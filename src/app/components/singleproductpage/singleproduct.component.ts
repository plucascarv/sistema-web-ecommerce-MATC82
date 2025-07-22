import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-singleproduct',
  imports: [CommonModule],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  product!: Product;
  main_img!:string;
  features:string[] = ["lorem ipsum", "lorem ipsum", "lorem ipsum"]
  socials:string[] = [
    "/socials/twitter.svg",
    "/socials/instagram.svg",
    "/socials/facebook.svg",
    "/socials/whatsapp.svg",
    "/socials/youtube.svg"];
    
  constructor(private route:ActivatedRoute, private productService:ProductService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id:string) {
    this.productService.find(id).subscribe({
      next: (product) => {
        this.product = product;
        this.main_img = this.product.images[0];
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  selectIMG(img: string) {
    this.main_img = img;
  }

}
