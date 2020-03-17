import {Component, OnInit, Output} from '@angular/core';
import {MServiceService} from '../../shared/m-service.service';
import {LocalService} from './local.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LocalService]
})
export class ProfileComponent implements OnInit {
  userName = 'Tom';
  userAge = 22;
  title = 'Card';
  constructor() {}
  ngOnInit() {
  }
}
