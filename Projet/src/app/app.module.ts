import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { SignInModule } from './vue/sign-in/sign-in.module';
import { LogInModule } from './vue/log-in/log-in.module';
import { MinHeaderModule } from './vue/min-header/min-header.module';
import { HeaderModule } from './vue/header/header.module';
import { LandingPageModule } from './vue/landing-page/landing-page.module';
import { SingleProductModule } from './vue/single-product/single-product.module';
import { ProductsListModule } from './vue/product-list/products-list.module';
import { ProductSheetModule } from './vue/product-sheet/product-sheet.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from './vue/order/order.module';
import { OrderResultModule } from './vue/order-result/order-result.module';
import { SearchByNameModule } from './vue/search/search-by-name.module';
import { SearchResultModule } from './vue/search-result/search-result.module';
  import { UpdateUserModule } from './vue/update-user/update-user.module';
 import { basketModule } from './vue/basket/basket.module';
 @NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SignInModule,
    LogInModule,
    MinHeaderModule,
    HeaderModule,
    LandingPageModule,
    SingleProductModule,
    ProductsListModule,
    ProductSheetModule,
    OrderModule,
    OrderResultModule,
    SearchByNameModule,
    SearchResultModule,
    UpdateUserModule,
    SearchResultModule,
    basketModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
