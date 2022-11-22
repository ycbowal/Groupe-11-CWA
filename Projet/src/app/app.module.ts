import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';
import { LogInComponent } from './vue/log-in/log-in.component';
import { MinHeaderComponent } from './vue/min-header/min-header.component';
import { HeaderComponent } from './vue/header/header.component';
import { LandingPageComponent } from './vue/landing-page/landing-page.component';
import { DeepGlobalVariablesService } from './services/deep-global-variables.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    MinHeaderComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
