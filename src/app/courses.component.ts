import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ title }}</h2>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
    <input [value]="email" type="text" (keyup.enter)="email = $event.target.value; onKeyUp()">
    <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()">
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = false;
  email = 'me@wxample.com';

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp() {
    console.log(this.email);
  }
}
