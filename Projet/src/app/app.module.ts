import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';
import { LogInComponent } from './vue/log-in/log-in.component';
import { MinHeaderComponent } from './vue/min-header/min-header.component';
 import { SingleProductComponent } from './vue/single-product/single-product.component';
import { ProductListComponent } from './vue/product-list/product-list.component';
import { ProductSheetComponent } from './vue/product-sheet/product-sheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './vue/search-result/search-result.component';
import { SearchGroupeModule } from './vue/search-groupe/search-groupe.module';
import { HeaderComponent } from './vue/header/header.component';
import { BasketModule } from './vue/basket/basket.module';
import { OrderComponent } from './vue/order/order.component';
import { OrderResultComponent } from './vue/order-result/order-result.component';
import { SearchByPriceComponent } from './vue/search-by-price/search-by-price.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    MinHeaderComponent,
      SingleProductComponent,
    ProductListComponent,
    ProductSheetComponent,
    SearchResultComponent,
    HeaderComponent,
    OrderComponent,
    OrderResultComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    BrowserModule,CommonModule,
    FormsModule,SearchGroupeModule,BasketModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
