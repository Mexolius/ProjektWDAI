import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth-service.service';
import { CourseDataServiceService, CourseData } from '../Services/course-data-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
}) 
export class CourseComponent  implements OnInit   {

  @Input () ID: string;
  @Input () Name:string;
  @Input () Description: string;
  Clicked: boolean;
  @Input () Score: number;
  @Input () Image: string;
  loggedIn: boolean;

  constructor(private router: Router, private auth: AuthService,private coursed: CourseDataServiceService) {
    this.Clicked = false;
   }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(val=> this.loggedIn=val);
  }

  onClick(e: Event)
  {
    this.router.navigate(['browse/' + this.ID]);
  }

  roll(e: Event)
  {
    console.log(e);
    this.Clicked=false;
  }

  unroll(e: Event)
  {
    console.log(e)
    this.Clicked=true;
  }

  voteUp(){
    if(this.loggedIn)
    {
      this.Score++;
      this.coursed.updatedata(
        {
          ID:this.ID,
          Name: this.Name,
          Description: this.Description,
          Image: this.Image,
          Score: this.Score
        } as CourseData
      )
    }

  }

  voteDown(){
    if(this.loggedIn&&this.Score>0)
    this.Score--;
    this.coursed.updatedata(
      {
        ID:this.ID,
        Name: this.Name,
        Description: this.Description,
        Image: this.Image,
        Score: this.Score
      } as CourseData
    )
  }
}


