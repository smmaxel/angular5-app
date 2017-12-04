import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DummyDataService } from '../../dummy-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  products: any[];
  searchTerm: any;
  menuHidden = true;

  formatter = (x: {name: string}) => x.name;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(600)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this.products.filter(product => product.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 5));


  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private productService: DummyDataService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/home'], { replaceUrl: true }));
  }

  get username(): string {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  itemSelected($event: any) {
    this.router.navigate(['/product/' + $event.item.id]);
    this.searchTerm = "";
  }

}
