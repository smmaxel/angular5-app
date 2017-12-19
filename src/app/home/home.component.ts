import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyDataService } from '../core/dummy-data.service';
import { EndpointService } from '../core/endpoint.service';

import * as _ from 'lodash';

import { Product } from '../core/models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allProducts: any = [];
  filter: string = 'Best selling (default)';

  filters: string[] = [
    'Best selling (dafault)',
    'Price (low-high)',
    'Price (high-low)',
    'Name (A-Z)'
  ];

  constructor(
    private router: Router,
    private endpointService: EndpointService) { }

  ngOnInit() {
    this.endpointService
      .getServerRequest('products')
      .subscribe((data: any) => {this.allProducts = this.convertToInteger(data.data)});
  }

  convertToInteger(data: any[]) {
    _.map(data, function(o: any) {
      o.id = parseInt(o.id, 10);
      o.price = parseFloat(o.price);
    })

    return data;
  }

  changeFilter(index: number) {
    this.filter = this.filters[index];
  }

  goToProduct(id: number) {
    this.router.navigate(['/product/' + id], { replaceUrl: true });
  }

}
