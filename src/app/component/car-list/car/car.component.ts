import { Component, OnInit } from '@angular/core';
import {Car} from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public cars: Car[] = [ new Car('Bmw', '12.12.19', '4 series', 'https://baza-gai.com.ua/catalog-images/bmw/1er/model.jpg', false, 1),
    new Car('Mersedes', '11.12.19', 'CLA', 'http://avtopmr.com/uploads/car/5c1169e3cba7e.jpg', false, 2)]
  constructor() { }

  ngOnInit() {
  }

}
