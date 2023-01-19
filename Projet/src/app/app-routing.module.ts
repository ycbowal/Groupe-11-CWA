import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LogInComponent } from './vue/log-in/log-in.component';
import { ProductSheetComponent } from './vue/product-sheet/product-sheet.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';
 import { BasketComponent } from './vue/basket/basket.component';
import { OrderComponent } from './vue/order/order.component';
import { OrderResultComponent } from './vue/order-result/order-result.component';
import { SearchByNameComponent } from './vue/searchByName/searchByName.component';
import { SearchResultComponent } from './vue/search-result/search-result.component';
import { ProductListComponent } from './vue/product-list/product-list.component';
      
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'search', component: SearchByNameComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'toProductSheet/:productId', component: ProductSheetComponent },
  { path: 'order', component: OrderComponent },
  { path: 'componentresult', component: OrderResultComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
