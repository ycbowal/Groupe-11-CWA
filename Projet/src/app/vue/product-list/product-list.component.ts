import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private globaVariables: GlobalVariablesService, private router: Router) { 
    this.products = this.globaVariables.getProducts();
  }

  ngOnInit(): void {
  }
  onToggleFavorites(product: Product): void {
    if(!this.globaVariables.isConnected) {
      this.router.navigateByUrl('/toLogIn');
    }
    else {
      this.globaVariables.user.toggleFavorite(product.id);
    }
  }


  isFavorited(id: string): boolean {
    if(this.globaVariables.isConnected && this.globaVariables.user.getFavIndex(id) > -1)
        return true;
    return false;
  }
}
