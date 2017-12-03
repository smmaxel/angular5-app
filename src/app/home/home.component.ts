import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DummyDataService } from '../core/dummy-data.service';

import { Product } from '../core/models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allProducts: Product[];
  filter: string = 'Best selling (default)';

  filters: string[] = [
    'Best selling (dafault)',
    'Price (low-high)',
    'Price (high-low)',
    'Best rated',
    'Name (A-Z)'
  ];

  constructor(private productService: DummyDataService) {}

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
  }

  changeFilter(index: number) {
    this.filter = this.filters[index];
  }

}
