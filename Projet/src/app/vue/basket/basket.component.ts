import { Component, OnInit } from '@angular/core';
import { BasketproductsService } from '../../services/basketproducts.service';
import { BasketProduct } from '../../model/basket-product';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { ClientProduct } from '../../model/client-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  BasketProducts!: BasketProduct[];
  constructor(
    private router: Router,
    private BasketService: BasketproductsService,
    private globaVariables: GlobalVariablesService
  ) {
    this.BasketService.getLBasketProducts().subscribe(
      (result) => (this.BasketProducts = result)
    );
    console.info(this.BasketProducts);
  }
  ngOnInit() {}
  isFavorited(id: string): boolean {
    if (
      this.globaVariables.isConnected &&
      this.globaVariables.user.getFavIndex(id) > -1
    )
      return true;
    else return false;
  }
  refresh(): void {
    this.router
      .navigateByUrl('basket', { skipLocationChange: true })
      .then(() => {
        console.log(decodeURI(location.pathname));
        this.router.navigate([decodeURI(location.pathname)]);
      });
  }
  addToBasket(product: ClientProduct) {
    this.BasketService.addToBasket(product);
    this.refresh();
  }
  gotoOrderpage(){
   if(this.globaVariables.isConnected)
      this.router.navigateByUrl(`order`);
    else
       this.router.navigateByUrl(`login`);
  }
  gotoproductListPage()
  {
    this.router.navigateByUrl(``);

  }
  removeFromBasket(product: ClientProduct) {
    this.BasketService.deleteFrombasket(product);
    this.refresh();
  }
  removeDirectlyFromBasket(product: ClientProduct) {
    this.BasketService.deleteDirectlyFrombasket(product);
    this.refresh();
  }
  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.BasketProducts.length; i++)
      total +=
        this.BasketProducts[i].Clientproduct.product.realPrice *
        this.BasketProducts[i].nbWantedCopies;
    return total;
  }
}
