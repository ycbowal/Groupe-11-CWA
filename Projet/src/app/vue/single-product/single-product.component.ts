import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() isFavorited!: boolean;

  @Output() toggleFavorite!: EventEmitter<Product>;

  constructor(private router: Router) { 
    this.toggleFavorite = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }
  onToggleFavorites(event: Event): void {
    this.toggleFavorite.emit(this.product);
    event.stopPropagation();
  }
  onGoToTheDescription(): void {
    this.router.navigateByUrl(`toProductSheet/${this.product.id}`);
  }
}
