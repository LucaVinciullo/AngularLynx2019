import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListMenu } from 'src/app/models/list-menu';
import { ListMenuService } from 'src/app/services/list-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private listItm : ListMenu[]

  constructor(private list: ListMenuService, private route: Router) {
    this.listItm = list.getItemList();
   }

  ngOnInit() {
  }

}
