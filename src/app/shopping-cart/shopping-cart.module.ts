import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

import { DummyDataService } from '../core/dummy-data.service';
import { LocalStorageService } from '../core/localstorage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ShoppingCartComponent
  ],
  providers: [
    DummyDataService,
    LocalStorageService
  ]
})
export class ShoppingCartModule { }
