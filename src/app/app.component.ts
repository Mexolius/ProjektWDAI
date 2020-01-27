import { Component } from '@angular/core';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WDAIProj';
  CourseCompnent: CourseComponent;

  

  
}
