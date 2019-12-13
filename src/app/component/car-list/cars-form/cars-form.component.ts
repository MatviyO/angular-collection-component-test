import {Component, OnInit} from '@angular/core';
import {Car} from '../car.model';
import * as moment from 'moment';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {AddCar} from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
 private id = 2;
  carName = '';
  carModel = '';
  carImg = '';
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  onAdd() {
    if (this.carModel === '' || this.carName === '' || this.carImg === '') { return; }
    this.id = ++this.id;
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      this.carImg,
      false,
      this.id

    );
    this.store.dispatch(new AddCar(car))
    this.carModel = '';
    this.carImg = '';
    this.carName = '';
  }
  onLoad() {

  }

}
