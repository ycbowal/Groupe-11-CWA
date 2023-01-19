import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketproductsService } from '../../services/basketproducts.service';
import { Address } from '../../model/address';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BasketProduct } from '../../model/basket-product';
import { ClientProduct } from '../../model/client-product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  angForm!:any;
  BasketProducts!: BasketProduct[];
  constructor(private router: Router,private BasketService: 
  BasketproductsService,private fb: FormBuilder){
    this.BasketService.getLBasketProducts().subscribe(
      (result) => (this.BasketProducts = result)
    );
    this.createForm();
  }
  ngOnInit(){}
  onOrder(){
  }
  createForm(){
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       firstname: ['', Validators.required ],
       postalcode:['', Validators.required,Validators.minLength(4),Validators.maxLength(4)],
       Address: ['', Validators.required ],
       town: ['', Validators.required ],
       country: ['',Validators.required ]});}

  gotoOrderValidpage(){ 
    this.router.navigateByUrl('/componentresult');}
    removeDirectlyFromBasket(product: ClientProduct) {
      this.BasketService.deleteDirectlyFrombasket(product);
    }

}
