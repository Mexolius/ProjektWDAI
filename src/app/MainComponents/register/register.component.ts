import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  success = false;
  email: string;
  password: string;
  name: string;
  surname: string;
  faculty: string;

  credentials ={
    email: '',
    password: ''
  }

  faculties: any = ['BG', 'WWW', 'SJO', 'WIEiT', 'WEiP', 'WFiIS', 'WGGiOŚ', 'WGGiIŚ', 'WGiG', 'WH', 'WIMiC', 'WIMiIP', 'WIMiR', 'WMN', 'WMS', 'WO', 'WWNiG', 'WZ']

  constructor(private formBuilder: FormBuilder, private router: Router, private AutheService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
      name:['', Validators.required],
      surname:['', Validators.required],
      faculty:['', [Validators.required]],
    })

  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    this.success = true;
    this.credentials.email=this.registerForm.get('email').value;
    this.credentials.password=this.registerForm.get('password').value;
    this.name=this.registerForm.get('name').value;
    this.surname=this.registerForm.get('surname').value;
    this.faculty=this.registerForm.get('faculty').value;

    this.AutheService.register(this.credentials);


  }


  navigateToLogin(e: Event)
  {
    this.router.navigate(['login']);
  }
}
