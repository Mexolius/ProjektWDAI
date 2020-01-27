import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideModule } from 'ng-click-outside'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { CourseComponent } from './course/course.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './MainComponents/home/home.component';
import { BrowseCoursesComponent } from './MainComponents/browse-courses/browse-courses.component';
import { ContactComponent } from './MainComponents/contact/contact.component';
import { AddCourseComponent } from './MainComponents/add-course/add-course.component';
import { LoginComponent } from './MainComponents/login/login.component';
import { RegisterComponent } from './MainComponents/register/register.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavComponent,
    HomeComponent,
    BrowseCoursesComponent,
    ContactComponent,
    AddCourseComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
