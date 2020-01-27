import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Credentials } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  wrongMail=false;
  wrongPassword = false;
  credentials ={
    email: '',
    password: ''
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private AuthService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.credentials.email=this.loginForm.get('email').value;
    this.credentials.password=this.loginForm.get('password').value;

    this.success = true;
    this.AuthService.login(this.credentials)
    .then(()=>this.router.navigate(['browse']))
    .catch(err=>console.log(err.message));

  }

  navigateToRegister(e: Event)
  {
    this.router.navigate(['register']);
  }
}
