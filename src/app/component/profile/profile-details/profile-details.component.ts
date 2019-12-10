import {Component, Input, OnInit} from '@angular/core';
import {ProfileComponent} from '../profile.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
   userName: string;
   userAge: number;
   myDate = Date.now();
  constructor(private prof: ProfileComponent) { }
  ngOnInit() {
    this.userName = this.prof.userName;
    this.userAge = this.prof.userAge;
  }
}
