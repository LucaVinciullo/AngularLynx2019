import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HomepageItem } from 'src/app/models/homepage-item';
import { HomepageTextService } from 'src/app/services/homepage-text.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  user : User;
  homepageText: string = "testo che descrive in modo accattivante quello che facciamo per estorcere soldi dagli altri"
  texts: HomepageItem [];  
  
  constructor( homepageTextService: HomepageTextService) { 
    this.texts = homepageTextService.getText();
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user')) ;

  }

}
