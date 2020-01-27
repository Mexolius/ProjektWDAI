import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './MainComponents/home/home.component';
import { AddCourseComponent } from './MainComponents/add-course/add-course.component';
import { BrowseCoursesComponent } from './MainComponents/browse-courses/browse-courses.component';
import { LoginComponent } from './MainComponents/login/login.component';
import { RegisterComponent } from './MainComponents/register/register.component';
import { ContactComponent } from './MainComponents/contact/contact.component';
import { AuthGuard } from './auth-guard.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddCourseComponent},
  {path: 'browse', component: BrowseCoursesComponent},
  {path: 'browse/:id', component: BrowseCoursesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
