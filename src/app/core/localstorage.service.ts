const cart = "cart";

export class LocalStorageService {

  constructor() { }

  getAll(): any[] {
    return this.getFromLocalStorage() || [];
  }

  add(product: any) {
    let localStorage = this.getFromLocalStorage() || [];
    let sameProduct = null;


  }

  remove(id: number) {

  }

  private getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(cart));
  }

  private setToLocalStorage(data: any) {
    localStorage.setItem(cart, JSON.stringify(data));
  }

}
