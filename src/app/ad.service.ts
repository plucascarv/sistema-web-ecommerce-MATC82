import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  ads:{name:string, img:string}[] = [
    {name:'', img:'/ads/ad1.png'},
    {name:'', img:'/ads/ad2.png'},
    {name:'', img:'/ads/ad3.png'},
    {name:'', img:'/ads/ad4.png'},
    {name:'', img:'/ads/ad5.png'},
    {name:'', img:'/ads/ad6.png'}
  ];

  getRandomAds(count:number):{name:string,img:string}[] {
    const shuffled = this.ads.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
