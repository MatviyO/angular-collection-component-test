import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
   @Input() cell;
   isMarked = false;
   isActive = false;

  constructor() {
  }
  ngOnInit() {
  }
  onClick() {
    this.isMarked = true;
    this.isActive = true;
  }
}
