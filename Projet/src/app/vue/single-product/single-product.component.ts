import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { BasketproductsService } from '../../services/basketproducts.service';
import { ClientProduct } from '../../model/client-product';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() isFavorited!: boolean;
  @Output() toggleFavorite!: EventEmitter<Product>;
  ngOnInit(): void {}

  constructor(
    private router: Router,
    private BasketService: BasketproductsService
  ) {
    this.toggleFavorite = new EventEmitter<Product>();
  }

  onToggleFavorites(event: Event): void {
    this.toggleFavorite.emit(this.product);
    event.stopPropagation();
  }
  onGoToTheDescription(): void {
    this.router.navigateByUrl(`toProductSheet/${this.product.id}`);
  }

  addToBasket(): void {
    this.BasketService.addToBasket(
      new ClientProduct(this.product, this.isFavorited)
    );
    //this.router.navigateByUrl(`tobasket`);
  }
}
