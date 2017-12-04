import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router,
    private productService: DummyDataService) {}

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
  }

  changeFilter(index: number) {
    this.filter = this.filters[index];
  }

  goToProduct(id: number) {
    this.router.navigate(['/product/' + id], { replaceUrl: true });
  }

}
