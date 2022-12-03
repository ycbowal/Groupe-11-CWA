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
import { HeaderComponent } from './vue/header/header.component';
import { LandingPageComponent } from './vue/landing-page/landing-page.component';
import { DeepGlobalVariablesService } from './services/deep-global-variables.service';
import { UpdateUserComponent } from './vue/update-user/update-user.component';
import { SingleProductComponent } from './vue/single-product/single-product.component';
import { ProductListComponent } from './vue/product-list/product-list.component';
import { ProductSheetComponent } from './vue/product-sheet/product-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    MinHeaderComponent,
    HeaderComponent,
    LandingPageComponent,
    UpdateUserComponent,
    SingleProductComponent,
    ProductListComponent,
    ProductSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
