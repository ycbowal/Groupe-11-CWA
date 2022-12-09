import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './vue/landing-page/landing-page.component';
import { LogInComponent } from './vue/log-in/log-in.component';
import { ProductSheetComponent } from './vue/product-sheet/product-sheet.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';
import { UpdateUserComponent } from './vue/update-user/update-user.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  //{ path: '', component: UpdateUserComponent },
  { path: 'toSignIn', component: SignInComponent },
  { path: 'toLogIn', component: LogInComponent },
  { path: 'toUpdateUser', component: UpdateUserComponent },
  { path: 'toProductSheet/:productId', component: ProductSheetComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
