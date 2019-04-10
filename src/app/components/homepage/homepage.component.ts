import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
     user : User;
     homepageText: string = "testo che descrive in modo accattivante quello che facciamo per estorcere soldi dagli altri"
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user')) ;
  }

}
