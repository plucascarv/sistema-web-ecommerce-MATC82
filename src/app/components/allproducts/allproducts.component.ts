import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { AdService } from '../../ad.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  imports: [RouterLink],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent {
  constructor(private productService:ProductService, private adService:AdService) {}

  categories:{name:string,quantity:number,img:string}[] = [
    {name:'Notebook', quantity:25, img:'/categories/notebooks.png'},
    {name:'Desktop', quantity:18, img:'/categories/pcs.png'},
    {name:'Monitor', quantity:11, img:'/categories/monitores.jpg'},
    {name:'Headset', quantity:8, img:'/categories/headsets.png'},
    {name:'Jogo', quantity:121, img:'/categories/jogos.png'},
    {name:'Action Figure', quantity:10, img:'/categories/figure.webp'},
    {name:'Peça', quantity:45, img:'/categories/peça.png'},
    {name:'Periférico', quantity:31, img:'/categories/perif.webp'},
    {name:'VR', quantity:6, img:'/categories/vr.jpg'},
    {name:'Acessórios', quantity:21, img:'/categories/acessorio.jpg'}
  ]
  items:Product[] = [
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"}
  ];
  selected:string = 'Todas Categorias'
  ads:{name:string, img:string}[] = []

  ngOnInit() {
    this.productService.getAll().subscribe(itens => {
      this.items = itens;
    });

    this.ads = this.adService.getRandomAds(3);
  }

  select(item:string) {
    this.selected = item;
  }
}
