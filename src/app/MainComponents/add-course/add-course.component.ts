import { Component, OnInit } from '@angular/core';
import { CourseDataServiceService, CourseData } from 'src/app/Services/course-data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseComponent } from 'src/app/course/course.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  success=false;
  name: string;
  description: string;
  image: string;

  constructor(private formBuilder: FormBuilder, private dataService: CourseDataServiceService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      courseName:[''],
      description:['', Validators.required],
      image:['', Validators.required],
    })
  }

    onSubmit() {
      this.submitted = true;
      console.log(this.addForm.get('courseName').value)
  
      if (this.addForm.invalid) {
          return;
      }
  
      this.success = true;
      
      this.name=this.addForm.get('courseName').value;
      this.image=this.addForm.get('image').value;
      this.description=this.addForm.get('description').value;


      this.dataService.adddata(
        {
          Name: this.name,
          Image: this.image,
          Description: this.description,
          Score: 0,
          ID: "0"
        } as CourseData)
  
    }
  

}
