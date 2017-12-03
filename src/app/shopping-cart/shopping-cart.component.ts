import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  styleUrls: ['./shoping-cart.component.scss'],
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] = [{}, {}, {}, {}];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

 }
