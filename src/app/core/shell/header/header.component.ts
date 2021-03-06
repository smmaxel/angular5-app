import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EndpointService } from '../../endpoint.service';
import { MessageService } from '../../message.service';
import { LocalStorageService } from '../../localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  itemsInCart: number = 0;
  subscription: Subscription;

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
              private endpointService: EndpointService,
              private messageService: MessageService,
              private localstorageService: LocalStorageService) {
                this.subscription = this.messageService.getMessage().subscribe(numItems => { this.itemsInCart = numItems; });
              }

  ngOnInit() {

    this.endpointService
      .getServerRequest('products')
      .subscribe((data: any) => {this.products = data.data});

    this.localstorageService.getNumberOfItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
  }

}
