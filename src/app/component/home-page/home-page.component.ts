import { Component, OnInit } from '@angular/core';
import {MServiceService} from '../../shared/m-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Card';
  data: any = [];
  searchStr = '';
  constructor(
    private usersService: MServiceService) {
  }
  ngOnInit() {
    this.usersService.getUsers().subscribe(d => {
      this.data = d;
    });
  }

}
