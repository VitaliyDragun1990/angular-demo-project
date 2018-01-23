import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [];

  onAdd() {
    this.courses.push({id: 4, name: 'Course 4'});
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
