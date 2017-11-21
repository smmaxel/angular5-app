import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html'
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

  selectedImage: string = this.images[0];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Is this it: ', this.route.params);
  }

}
