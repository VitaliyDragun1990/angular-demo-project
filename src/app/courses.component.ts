import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{ course.title | uppercase | lowercase }} <br>
    {{ course.students | number  }} <br>
    {{ course.rating | number: '1.2-2' }} <br>
    {{ course.price | currency:'AUD':'symbol':'3.2-2'}} <br>
    {{ course.releaseDate | date: 'shortDate'}} <br>
  `
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
}
