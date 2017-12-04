import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { element } from 'protractor';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { DummyDataService } from '../core/dummy-data.service';
import { LocalStorageService } from '../core/localstorage.service';

import { Product } from '../core/models/product.interface';

@Component({
  selector: 'app-product',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  providers: [NgbPopoverConfig]
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: Product;
  quantity: number = 1;
  selectedImage: string;
  selectedColor: string;
  selectedMaterial: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private popover: NgbPopoverConfig,
    private productService: DummyDataService,
    private localstorageService: LocalStorageService
  ) {
    popover.triggers = 'hover';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemId = params['id'] - 1;
      this.currentProduct = this.productService.getProductById(itemId);
      this.selectedImage = this.currentProduct.coverImg;
      this.selectedColor = this.currentProduct.colors[0];
      this.selectedMaterial = this.currentProduct.materials[0];
    });
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  validateQuantity(event: any) {
    const pattern = /[1-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onBlurQuantity() {
    if (!this.quantity) {
      this.quantity = 1;
    }
  }

  changeMaterial(name: string) {
    this.selectedMaterial = name;
  }

  addToCart() {

    let item = {
      id: this.currentProduct.id,
      color: this.selectedColor,
      material: this.selectedMaterial,
      quantity: this.quantity
    };

    this.localstorageService.add(item);

  }

}
