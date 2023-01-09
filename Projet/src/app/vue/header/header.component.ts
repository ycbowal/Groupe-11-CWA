import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../../services/global-variables.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mouseIsOverMyAccount: boolean = false;
  lastName: string = '';
  firstName: string = '';
  downMedium: boolean = false;
  myBasket: string = '&#128722;';
  myAccount: string = '&#128100;';
  @Output() valueofsearch = new EventEmitter<string>();
  ProductName!: string;

  constructor(
    private router: Router,
     private globalVariables: GlobalVariablesService
  ) {
    if (this.isConnected) {
      this.lastName = this.globalVariables.user.lastName;
      this.firstName = this.globalVariables.user.firstName;
    }
  }
  ngOnInit(): void {
     
  }

  mouseEnter(event: Event): void {
    this.mouseIsOverMyAccount = true;
  }
  mouseLeave(event: Event): void {
    this.mouseIsOverMyAccount = false;
  }
  onFavorites(): void {
    if (this.globalVariables.isConnected) {
    } else {
      this.router.navigateByUrl('/toLogIn');
    }
  }
  onDisconnect(): void {
    this.globalVariables.logOut();
    this.router.navigateByUrl('/toLogIn');
    this.firstName = this.lastName = '';
  }
  onUpdateUser(): void {
    this.router.navigateByUrl('/toUpdateUser');
  }

  get isConnected(): boolean {
    return this.globalVariables.isConnected;
  }
  set isConnected(state: boolean) {
    this.isConnected = state;
  }

  sendNamevaluetoservice(): void {
    this.valueofsearch.emit(this.ProductName);
    this.refresh();
  }
  gotoBasketView(): void {
    this.router.navigateByUrl(`tobasket`);
  }
  refresh(): void {
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        console.log(decodeURI(location.pathname));
        this.router.navigate([decodeURI(location.pathname)]);
      });
  }
}
