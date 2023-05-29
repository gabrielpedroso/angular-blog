import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent {
  @Input() photo: string = '';
  @Input() title: string = '';
  @Input() description: string = ''
}
