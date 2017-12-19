import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EndpointService } from '../core/endpoint.service';
import { LocalStorageService } from '../core/localstorage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-shopping-cart',
  styleUrls: ['./shoping-cart.component.scss'],
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  productsInCart: any[];
  products: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private endpointService: EndpointService,
    private localstorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.products = this.localstorageService.get();

    let productIds: any[] = [];
    _.forEach(this.products, function(o: any) {
      productIds.push(o.id);
    });

    if (productIds.length > 0) {
      this.endpointService
        .getServerRequest('products/' + productIds.join())
        .subscribe((data: any) => this.productsInCart = this.addDetails(data.data));
    }
  }

  addDetails(data: any[]) {
    _.map(this.products, function(o: any) {
      _.merge(o, _.find(data, {id: o.id}));
    });

    return this.products;
  }

  remove(id: number) {
    this.localstorageService.remove(id);
    this.productsInCart.splice(id, 1);
  }

  goToProduct(id: number) {
    this.router.navigate(['/product/' + id], { replaceUrl: true });
  }

 }
