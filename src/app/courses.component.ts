import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{ text | summary: 100 }}
  `
})
export class CoursesComponent {
  text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium.`;

}
