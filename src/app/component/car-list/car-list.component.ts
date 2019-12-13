import {Component, OnInit} from '@angular/core';
import {Car, Cars} from './car.model';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public carsState: Observable<Cars>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.carsState = this.store.select('carPage');
  }



}
