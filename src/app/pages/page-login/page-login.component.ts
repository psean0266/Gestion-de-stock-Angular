import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user/user.service';


import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

 
authenticationRequest: AuthenticationRequest = {}


constructor(
  private userService: UserService,
   private router: Router
){}

ngOnInit(){}

login() {
  this.userService.login(this.authenticationRequest).subscribe({
        next: (data: AuthenticationResponse) => {
          localStorage.setItem('authenticationResponse', JSON.stringify(data));
        },
        error: (error: any) => {
          console.log(error);
          this.router.navigate(['inscrire']);
         }
      });
    }
 }
