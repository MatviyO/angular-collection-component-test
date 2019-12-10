import {Component, Input, OnInit} from '@angular/core';
import {LocalService} from '../local.service';

@Component({
  selector: 'app-profile-message',
  templateUrl: './profile-message.component.html',
  styleUrls: ['./profile-message.component.css'],
  providers: [LocalService]
})
export class ProfileMessageComponent implements OnInit {
  isMarked = false;
  isActive = false;
  data2: any = [];

  constructor(private localService: LocalService) {
  }

  ngOnInit() {
    this.localService.getPosts().subscribe(d => {
      this.data2 = d;
    });
  }

  onClick() {
    this.isMarked = true;
    this.isActive = true;
  }

}
