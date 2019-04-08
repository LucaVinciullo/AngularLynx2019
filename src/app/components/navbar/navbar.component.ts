import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ListMenu } from 'src/app/models/list-menu';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { ListFilterService } from 'src/app/services/list-filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private listItm : ListMenu[]
  history: string[] = [];

  constructor(private list: ListMenuService, private route: Router, private listFilterService: ListFilterService) {
    this.listItm = list.getItemList();
   }

   search(query: string){
    this.listFilterService.searchString(query);
   }

   routeIsActive(routePath: string) {
    return this.route.url == routePath;
}
  ngOnInit() {
  }

}
