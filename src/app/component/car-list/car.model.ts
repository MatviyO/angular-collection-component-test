export class Car {
  constructor(
    public name: string,
    public date: string,
    public model: string,
    public img: string,
    public isSold = false,
    public id?: number
  ) {}
}

export interface Cars {
  cars: Car[];
}
