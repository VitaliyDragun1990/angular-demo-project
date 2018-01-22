import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('is-favorite') isSelected: boolean;
  @Output('change') click: EventEmitter<FavoriteChangedEventArgs> = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}
