import { Routes } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { SingleproductComponent } from './components/singleproductpage/singleproduct.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: SingleproductComponent
  },
  {
    path: 'product/:id',
    component: SingleproductComponent
  },
  {
    path:'allproducts',
    component: AllproductsComponent
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  }
];
