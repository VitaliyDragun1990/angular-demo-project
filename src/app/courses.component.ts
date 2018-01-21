import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(private service: CoursesService) {
    this.courses = this.service.getCourses();
  }
}
