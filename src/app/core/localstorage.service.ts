const cart = "angular5-cart";

export class LocalStorageService {

  constructor() { }

  get(): any[] {
    return this.getFromLocalStorage() || [];
  }

  add(product: any) {
    let allItems = this.get();
    let matchedItem = false;

    allItems.forEach(function(item) {
      if (product.id == item.id && product.color == item.color && product.material == item.material) {
        item.quantity += product.quantity;
        matchedItem = true;
      }
    });

    if (!matchedItem) {
      allItems.push(product);
    }

    this.setToLocalStorage(allItems);
  }

  remove(id: number) {
    let allItems = this.get();
    allItems.splice(id, 1);
    this.setToLocalStorage(allItems);
  }

  private getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(cart));
  }

  private setToLocalStorage(data: any) {
    localStorage.setItem(cart, JSON.stringify(data));
  }

}
