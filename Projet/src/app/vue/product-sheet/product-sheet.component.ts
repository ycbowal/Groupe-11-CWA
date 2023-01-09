import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { BasketproductsService } from '../../services/basketproducts.service';
import { ClientProduct } from '../../model/client-product';

@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.component.html',
  styleUrls: ['./product-sheet.component.scss'],
})
export class ProductSheetComponent implements OnInit {
  product!: Product;
  @Input() isFavorited!: boolean;
  @Output() toggleFavorite!: EventEmitter<Product>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalVariables: GlobalVariablesService,
    private Basket: BasketproductsService
  ) {
    this.toggleFavorite = new EventEmitter<Product>();
    this.globalVariables
      .getProduct(this.route.snapshot.params['productId'])
      .subscribe((res) => (this.product = res));
    console.log(this.product);
  }

  ngOnInit(): void {}

  addToBasket(): void {
    this.Basket.addToBasket(new ClientProduct(this.product, this.isFavorited));
  }

  onToggleFavorites(): void {
    this.toggleFavorite.emit(this.product);
  }
  onGoToTheDescription(): void {
    this.router.navigateByUrl('/toProductSheet');
  }
}
