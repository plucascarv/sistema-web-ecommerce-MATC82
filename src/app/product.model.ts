export interface Product {
  id?: string; 
  name: string; 
  description:string; 
  categorie: string; 
  images: string[]; 
  price: number; 
  quantity:number; 
  createdAT?:Date; 
  updatedAt?:Date;
}