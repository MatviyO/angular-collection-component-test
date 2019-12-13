import {Car} from '../car.model';
import {Action} from '@ngrx/store';
import {AddCar, CAR_ACTION} from './cars.action';

const initialState = {
  cars: [
    new Car('Bmw', '12.12.19', '4 series', 'https://baza-gai.com.ua/catalog-images/bmw/1er/model.jpg', false, 1),
    new Car('Mersedes', '11.12.19', 'CLA', 'http://avtopmr.com/uploads/car/5c1169e3cba7e.jpg', false, 2)

  ]
}

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default:
      return state;
  }
}
