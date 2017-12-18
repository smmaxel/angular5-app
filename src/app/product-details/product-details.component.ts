import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { element } from 'protractor';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import {EndpointService } from '../core/endpoint.service';
import { LocalStorageService } from '../core/localstorage.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  providers: [NgbPopoverConfig]
})
export class ProductDetailsComponent implements OnInit {

  contentReady: boolean = false;

  // ToDo: interface
  product: any = {
    images: [],
    materials: [],
    colors: []
  };

  // ToDo: interface
  reviews: any[] = [];

  selectedImage: string;
  selectedColor: string;
  selectedMaterial: string;
  quantity: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private popover: NgbPopoverConfig,
    private endpointService: EndpointService,
    private localstorageService: LocalStorageService
  ) {
    popover.triggers = 'hover';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemId = params['id'];

      this.endpointService
        .getServerRequest('product/' + itemId)
        .subscribe((data: any) => {
          this.product = data.data
          this.product.images = this.parseJSON(this.product.images);
          this.product.materials = this.parseJSON(this.product.materials);
          this.product.colors = this.parseJSON(this.product.colors);
          this.initOptions();
        });

        this.endpointService
          .getServerRequest('reviews/' + itemId)
          .subscribe((data: any) => this.reviews = data.data);
    });
  }

  parseJSON(string: string) {
    return JSON.parse(string);
  }

  initOptions() {
    this.selectedImage = this.product.images[0];
    this.selectedColor = this.product.colors[0];
    this.selectedMaterial = this.product.materials[0];
    this.contentReady = true;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
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
      id: this.product.id,
      color: this.selectedColor,
      material: this.selectedMaterial,
      quantity: this.quantity
    };

    this.localstorageService.add(item);
  }

}
