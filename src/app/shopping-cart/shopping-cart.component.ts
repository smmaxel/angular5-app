import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DummyDataService } from '../core/dummy-data.service';
import { LocalStorageService } from '../core/localstorage.service';

@Component({
  selector: 'app-shopping-cart',
  styleUrls: ['./shoping-cart.component.scss'],
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] = [{}, {}, {}, {}];

  availableProducts: any[];
  productsInCart: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: DummyDataService,
    private localstorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.availableProducts = this.productService.getProducts();
    this.productsInCart = this.getProductDetails(this.localstorageService.get(), this.availableProducts);
    console.log(this.productsInCart);
  }

  getProductDetails(cartProducts: any, allProducts: any) {
    cartProducts.forEach(function(cartProduct: any) {
      allProducts.forEach(function(product: any) {
        if (cartProduct.id === product.id) {
          Object.assign(cartProduct, product);
        }
      })
    });

    return cartProducts;
  }

  remove(id: number) {
    this.localstorageService.remove(id);
    this.productsInCart.splice(id, 1);
  }

 }
