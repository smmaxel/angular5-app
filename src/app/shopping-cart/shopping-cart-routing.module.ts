import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route } from '../core/route.service';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = Route.withShell([
  { path: 'shopping-cart', component: ShoppingCartComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShoppingCartRoutingModule { }
