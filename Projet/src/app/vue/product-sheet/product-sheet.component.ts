import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.component.html',
  styleUrls: ['./product-sheet.component.scss']
})
export class ProductSheetComponent implements OnInit {


  product!: Product;
  @Input() isFavorited!: boolean;

  @Output() toggleFavorite!: EventEmitter<Product>;

  constructor(private router: Router, private route: ActivatedRoute, private globalVariables: GlobalVariablesService) { 
    this.toggleFavorite = new EventEmitter<Product>();
    this.product = this.globalVariables.getProduct(this.route.snapshot.params['productId']) as Product;
    console.log(this.product);
  }

  ngOnInit(): void {
  }
  onToggleFavorites(): void {
    this.toggleFavorite.emit(this.product);
  }
  onGoToTheDescription(): void {
    this.router.navigateByUrl('/toProductSheet');
  }

}
