import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
