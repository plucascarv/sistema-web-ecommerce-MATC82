import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singleproduct',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  product: Product = {
    name: "Teclado Mecânico Gamer Wooting 60HE+, RGB, 61 Teclas, Layout 60%, Cabo Removível",
    category: "Keyboard",
    description: "Construído para desempenho você precisa da entrada mais rápida possível, entregue de forma consistente e sem falhas. Não apenas rgb ofuscante e promessas dissuasivas. É assim que entregamos a você a contribuição mais rápida possível, programado para a entrada mais rápida construímos o firmware do teclado desde o início, otimizado para velocidade de entrada. Ative o modo tachyon para priorizar a digitalização do teclado em vez de efeitos rgb inúteis. O 60he atualizará todas as posições analógicas em menos de 1ms, a cada 1ms. Projetado sem compromissos, os teclados tradicionais aderem à digitalização matricial econômica e ocultam o impacto negativo na velocidade de entrada usando marketing dissuasivo. O wooting 60he lê as chaves individuais e as verifica paralelamente para obter a menor latência possíve",
    price: 1799.99,
    images: ["/mock-product/w1.webp", "/mock-product/w2.webp", "/mock-product/w3.webp"],
    quantity: 8
  };
  related_products:Product[] = [
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"},
    {name: "MacBook Air 14, 13 polegadas, 8GB RAM, 256GB", price:4299.99, images:["/deal/front.jpg"], description:'', quantity:5, category:"Notebook"}
  ];
  main_img:string = this.product.images[0];
  features:string[] = ["Tecnologia e Precisão: Detecção analógica de movimento com precisão de 0,1mm para resposta imediata.", "Design e Ergonomia: Formato compacto de 60% otimiza o espaço e aumenta a portabilidade.", "Durabilidade e Qualidade: Construído para alta performance com leitura paralela das teclas para menor latência."]
  socials:string[] = [
    "/socials/twitter.svg",
    "/socials/instagram.svg",
    "/socials/facebook.svg",
    "/socials/whatsapp.svg",
    "/socials/youtube.svg"];
  payments:string[] = [
    "/payment/elo.svg",
    "/payment/amex.svg",
    "/payment/visa.svg",
    "/payment/mastercard.svg",
    "/payment/paypal.svg",
    "/payment/hipercard.svg"
  ]
    
  constructor(private route:ActivatedRoute, private productService:ProductService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id:string):void {
    this.productService.find(id).subscribe({
      next: (product) => {
        this.product = product;
        this.main_img = this.product.images[0];
        this.loadRelated(product.category)
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  loadRelated(category:string):void {
    this.productService.getByCategory(category).subscribe({
      next: (products) => {
        this.related_products = products.filter(p => p.name !== this.product.name).slice(0,5)
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  selectIMG(img: string) {
    this.main_img = img;
  }

  cart_quantity:number = 1;

  onSubmit() {}

  plus() {
    this.cart_quantity+=1;
  }
  minus() {
    this.cart_quantity-=1;
  }
}
