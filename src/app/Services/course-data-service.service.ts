import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CourseDataServiceService {

  constructor(private firestore: AngularFirestore) { 
    
  }

  getdata()
  {
    return this.firestore.collection('Courses').snapshotChanges();
  }

  adddata(course: CourseData)
  {
    return this.firestore.collection('Courses').add(
      {
        Name: course.Name,
        Image: course.Image,
        Description: course.Description,
        Score: course.Score
      }
    )
  }

  updatedata(course: CourseData){
    this.firestore.doc('Courses/' + course.ID).update(course);
   } 

  deleteByRefference(course: CourseData)
  {
    return this.firestore.doc('Courses/' + course.ID).delete();
  }

  deleteByID(courseID: string)
  {
    return this.firestore.doc('Courses/' + courseID).delete();
  }
}

export class CourseData
{
  Name:string;
  Image: string;
  Description: string;
  Score: number;
  ID: string;

  constructor(ID?: string, name?: string, description?: string, Image?: string, Score?: number)
  {
      if(ID) this.ID = ID;
      if(name) this.Name = name;
      this.Description = description;
      if(Image) this.Image = Image;
      if(Score) this.Score = Score;
  }
}