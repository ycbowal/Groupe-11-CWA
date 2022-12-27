import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { research } from '../../model/Reseach';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  ProductsList!: Product[];
  ProductsListTemp!: Product[];
  Research!: research;
  name!: string;
  Category!: string;
  Etat!: string;
  flagcategory: boolean = false;
  flagEtat: boolean = false;
  taille!: number;
  constructor(
    private globaVariables: GlobalVariablesService,
    private router: Router
  ) {
    this.globaVariables
      .getProducts()
      .subscribe((result) => (this.ProductsList = result));
  }
  ngOnInit(): void {
    this.Research = new research();
  }
  getProductByName(str: any): void {
    this.ProductsList = this.Research.getProductByname(str, this.ProductsList);
  }
  //methode assurant le passage d'une sequence  de filtrage à une autre
  //(une sequence est definie par une selection de categorie et d'etat peu importe l'ordre de la selection)
  FiltersequenceInit(): void {
    if (this.flagEtat === true && this.flagcategory === true) {
      this.flagEtat = false;
      this.flagcategory = false;
      this.Etat = '';
      this.Category = '';
      this.globaVariables
        .getProducts()
        .subscribe((res) => (this.ProductsList = res));
    }
  }
  getProductByEtat(): void {
    this.FiltersequenceInit();
    if (this.Etat === 'Nouveau') {
      if (this.Research.getProductByEtat(false, this.ProductsList).length > 0) {
        this.ProductsList = this.Research.getProductByEtat(
          false,
          this.ProductsList
        );
        this.flagEtat = true;
      }
    } else {
      if (this.Etat === 'Occasion') {
        if (
          this.Research.getProductByEtat(true, this.ProductsList).length > 0
        ) {
          this.flagEtat = true;
          this.ProductsList = this.Research.getProductByEtat(
            true,
            this.ProductsList
          );
        }
      }
    }
  }
  getProductByCategory(): void {
    this.FiltersequenceInit();
    if (
      this.Research.getProductByCategory(this.Category, this.ProductsList)
        .length > 0
    ) {
      this.ProductsList = this.Research.getProductByCategory(
        this.Category,
        this.ProductsList
      );
      this.flagcategory = true;
    }
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
