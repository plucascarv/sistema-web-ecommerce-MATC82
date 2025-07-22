import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL:string = ""
  products:Product[] = []

  constructor(private http:HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.API_URL+'/products')
  }

  find(param:string|Date|number):Observable<Product> {
    return this.http.get<Product>(this.API_URL+'/products/'+param);
  }
}
