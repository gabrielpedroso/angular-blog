import { Component } from '@angular/core';
import { dataPhotoCard, dataBigCard, dataSmallCard } from '../../core/data/dataFake';
import { ICard } from 'src/app/core/interfaces/ICard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  photoCard: ICard;
  bigCard: ICard[];
  smallCard: ICard[];

  constructor() {
    this.photoCard = dataPhotoCard;
    this.bigCard = dataBigCard;
    this.smallCard = dataSmallCard;
  }
}
