import { Component, OnInit } from '@angular/core';
import { CourseDataServiceService, CourseData } from 'src/app/Services/course-data-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.scss']
})
export class BrowseCoursesComponent implements OnInit {

  public allCourses: Array<CourseData>= new Array<CourseData>();
  public filteredCourses: CourseData[];
  public filters: FormGroup;


  constructor(private formBuilder: FormBuilder,private courseData: CourseDataServiceService) {
    this.getdata()
    .subscribe(courses=>courses
      .map(x => {
        this.allCourses.push({
          ID: x.payload.doc.id,
          ...(Object.assign({},x.payload.doc.data()))
        }as CourseData)

      } ))
      console.log(this.allCourses)
   }

  getdata()
  {
    return this.courseData.getdata();
  }

  ngOnInit() {
    this.filteredCourses = this.allCourses;
      this.filters = this.formBuilder.group({
        name: [''],
        description: [''],
        minScore: ['',Validators.min(0)],
        maxScore: [''],
      })
      this.onChanges();
  }

  onChanges(): void{

    this.filters.valueChanges.subscribe(val=>
      {
        this.filteredCourses=  this.filterCourses(
          this.filters.controls.name.value,
          this.filters.controls.description.value,
          this.filters.controls.minScore.value,
          this.filters.controls.maxScore.value
          );
      })
  }

  filterCourses(searchName: string, searchDescription: string, minScore: number, maxScore: number)
  {
    if(this.filters.valid)
      return this.allCourses.filter(RecepieTemplate=>
        RecepieTemplate.Name.toLowerCase().indexOf(searchName.toLowerCase())!== -1
        && RecepieTemplate.Description.toLowerCase().indexOf(searchDescription.toLowerCase())!==-1
        && RecepieTemplate.Score>=minScore && RecepieTemplate.Score<=maxScore);
        else return this.allCourses
  }

  unroll(e: Event)
  {
    console.log(e.target);
  }

}
