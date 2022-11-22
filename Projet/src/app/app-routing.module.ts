import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './vue/landing-page/landing-page.component';
import { LogInComponent } from './vue/log-in/log-in.component';
import { SignInComponent } from './vue/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  { path: 'toSignIn', component: SignInComponent },
  {path: 'toLogIn', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
