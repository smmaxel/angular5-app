import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { element } from 'protractor';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  providers: [NgbPopoverConfig]
})
export class ProductDetailsComponent implements OnInit {

  currentRate: number = 4;
  images: string[] = [
    './../../assets/pic1.jpg',
    './../../assets/pic2.jpg',
    './../../assets/pic3.jpg',
    './../../assets/pic4.jpg',
    './../../assets/pic5.jpg'
  ];

  materials: string[] = [
    'Cedar',
    'Cherry',
    'Chestnut',
    'Elm',
    'Mahogany'
  ];

  colors: string[] = ['Black', 'Red', 'Gray'];
  quantity: number = 1;

  reviews: any[] = [{}, {}, {}, {}];

  selectedImage: string = this.images[0];
  selectedColor: string = this.colors[0];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private popover: NgbPopoverConfig
  ) {
    popover.triggers = 'hover';
  }

  ngOnInit() {
    console.log('Is this it: ', this.route.params);
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

}
