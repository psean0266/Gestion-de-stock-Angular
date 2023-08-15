import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
  // faCoffee = faCoffee;
  // faCheck = faCheck;
 
//authenticationRequest: AuthenticationRequest = {}

constructor(
  // private userService: UserService
){}

ngOnInit(){}

login() {
  //this.userService.login(this.authenticationRequest)
}

}
