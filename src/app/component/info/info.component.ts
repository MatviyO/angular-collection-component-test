import { Component, OnInit } from '@angular/core';
import {MServiceService} from '../../m-service.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  size;
  saved  = false;
  constructor( private mServiceService: MServiceService,
               private router: Router) { }
  ngOnInit() {
    this.size = this.mServiceService.size;
  }
  onChange() {
    this.mServiceService.setSize(+ this.size);
  }
  goHome() {

    this.router.navigate(['home']);
  }
  save() {
    this.saved = !this.saved;
    console.log(this.saved);
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('you dont save page');
    } else {return true; }
  }
}

