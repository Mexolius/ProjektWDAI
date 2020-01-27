import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth-service.service';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "Kursy";
  loggedIn: boolean;
  userMail: string;

  constructor(private AuthService: AuthService, private router: Router) {
  this.AuthService.authState$.subscribe(()=>this.isLoggedIn());
  }


  ngOnInit() {
    this.isLoggedIn();
  }
  
  isLoggedIn()
  {
    if(this.AuthService.user!=null)
    {
      this.loggedIn=true;
      this.userMail = "Witaj " +this.AuthService.user.email;
    } 
    else this.loggedIn = false;
  }

  logOut(e: Event)
  {
    console.log(e);
    this.AuthService.logout()
    .then(()=>this.loggedIn=false)
    .then(() => this.router.navigate(["login"]));
  }
}
