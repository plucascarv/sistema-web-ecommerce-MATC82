export interface Product {
  id?: string; 
  name: string; 
  description:string; 
  category: string; 
  images: string[]; 
  price: number; 
  quantity:number; 
  createdAT?:Date; 
  updatedAt?:Date;
}