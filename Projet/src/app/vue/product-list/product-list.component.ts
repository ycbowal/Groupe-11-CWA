import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { GlobalVariablesService } from '../../services/global-variables.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  ProductsList!: Product[];
  ProductsListTemp!: Product[];
  Category!: string;
  taille!: number;
 
  constructor(
    private globaVariables: GlobalVariablesService,
    private router: Router ){
      this.globaVariables
      .getProducts()
      .subscribe((result) => (this.ProductsList = result));
      console.log("productList");console.info(this.ProductsList);
  }
  ngOnInit(): void {
   }
  
  onToggleFavorites(product: Product): void {
    if (!this.globaVariables.isConnected) {
      this.router.navigateByUrl('/toLogIn');
    } else {
      this.globaVariables.user.toggleFavorite(product.id);
    }
  }

  isFavorited(id: string): boolean {
    if (
      this.globaVariables.isConnected &&
      this.globaVariables.user.getFavIndex(id) > -1
    )
      return true;
    else
      return false;
  }
}
