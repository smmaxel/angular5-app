import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
const cart = "angular5-cart";

@Injectable()
export class LocalStorageService {

  constructor(private messageService: MessageService) { }

  get(): any[] {
    return this.getFromLocalStorage() || [];
  }

  getNumberOfItems(): void {
    this.messageService.sendMessage(this.get().length);
  }

  add(product: any) {
    let allItems = this.get();
    let matchedItem = false;

    allItems.forEach(function(item: any) {
      if (product.id === item.id && product.color === item.color && product.material === item.material) {
        item.quantity += product.quantity;
        matchedItem = true;
      }
    });

    if (!matchedItem) {
      allItems.push(product);
    }

    this.setToLocalStorage(allItems);
    this.getNumberOfItems();
  }

  remove(id: number) {
    let allItems = this.get();
    allItems.splice(id, 1);
    this.setToLocalStorage(allItems);
    this.getNumberOfItems();
  }

  private getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(cart));
  }

  private setToLocalStorage(data: any) {
    localStorage.setItem(cart, JSON.stringify(data));
  }

}
