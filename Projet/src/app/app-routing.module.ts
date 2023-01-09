import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './vue/landing-page/landing-page.component';
import { LogInComponent } from './vue/log-in/log-in.component';
import { ProductSheetComponent } from './vue/product-sheet/product-sheet.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';
import { UpdateUserComponent } from './vue/update-user/update-user.component';
import { BasketComponent } from './vue/basket/basket.component';
import { OrderComponent } from './vue/order/order.component';
import { OrderResultComponent } from './vue/order-result/order-result.component';
import { SearchComponent } from './vue/search/search.component';
import { SearchResultComponent } from './vue/search-result/search-result.component';
      
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'search', component: SearchComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'UpdateUser', component: UpdateUserComponent },
  { path: 'toProductSheet/:productId', component: ProductSheetComponent },
  { path: 'order', component: OrderComponent },
  { path: 'componentresult', component: OrderResultComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
