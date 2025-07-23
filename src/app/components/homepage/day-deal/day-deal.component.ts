import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdService } from '../../../ad.service';

@Component({
  selector: 'app-day-deal',
  imports: [RouterLink],
  templateUrl: './day-deal.component.html',
  styleUrl: './day-deal.component.css'
})
export class DayDealComponent implements OnInit, OnDestroy{
  promotionEnd: Date = new Date(new Date().setHours(23,59,99,999));
  timeLeft:string="";
  private timerInterval:any;
  ads!:{name:string, img:string}[];

  constructor(private adService:AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getRandomAds(2);
    this.updateTimer();
    this.timerInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateTimer():void {
    const now = new Date().getTime();
    const distance = this.promotionEnd.getTime() - now;
    if (distance < 0) {
      this.timeLeft = "Promoção encerrada";
      clearInterval(this.timerInterval);
      return;
    }

    const hours = Math.floor((distance/(1000*60*60))%24);
    const minutes = Math.floor((distance/(1000*60))%60);
    const seconds = Math.floor((distance/1000)%60);

    this.timeLeft = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  main_img: string = "/deal/front.jpg";
  select(item:string) {
    this.main_img = item;
  }
  
  product = {
    name: 'Apple MacBook Air, 13 polegadas, 8GB RAM, 256GB',
    price: '5.299,00',
    features: [
      "Processador M1 concebido pela Apple para um enorme avanço no desempenho da CPU, GPU e aprendizagem automática",
      "Mais produtividade com maior autonomia: até 18 horas",
      "A CPU 8-core é 3,5 vezes mais rápida e está à altura dos projetos mais exigentes"],
    gallery: [
      "/deal/front.jpg",
      "/deal/top.jpg",
      "/deal/side.jpg",
      "/deal/closed.jpg",
    ]
  }
}
