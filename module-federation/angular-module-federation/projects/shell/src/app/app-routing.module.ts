import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'profile', loadChildren: () => import('mfeProfile/Module').then(m => m.ProfileModule)},
  { path: 'basket', loadChildren: () => import('mfeBasket/Module').then(m => m.BasketModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
