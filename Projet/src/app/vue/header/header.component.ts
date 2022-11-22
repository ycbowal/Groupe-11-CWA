import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mouseIsOverMyAccount: boolean = false;
  lastName: string = '';
  firstName: string = '';
  constructor(private router: Router, private globalVariables: GlobalVariablesService) {
    if(this.isConnected) {
      this.lastName = this.globalVariables.user.lastName;
      this.firstName = this.globalVariables.user.firstName;
    }
   }
  mouseEnter(event: Event): void {
    this.mouseIsOverMyAccount = true;
  }
  mouseLeave(event: Event): void {
    this.mouseIsOverMyAccount = false;
  }
  onFavorites(): void {
    if(this.globalVariables.isConnected) {

    }
    else {
      this.router.navigateByUrl('/toLogIn');
    }
  }

  get isConnected(): boolean { return this.globalVariables.isConnected }
  set isConnected(state: boolean) {this.isConnected = state; }
  onDisconnect(): void {
    this.globalVariables.logOut();
    this.router.navigateByUrl('/toLogIn');
    this.firstName = this.lastName = '';
  }
}
