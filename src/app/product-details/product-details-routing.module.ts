import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route } from '../core/route.service';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = Route.withShell([
  {
    path: 'product',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: ':id', component: ProductDetailsComponent }
    ]
 }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductDetailsRoutingModule {

  currentRate: any = 4;

}
