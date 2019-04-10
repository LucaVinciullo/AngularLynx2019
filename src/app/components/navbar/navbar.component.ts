import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ListMenu } from 'src/app/models/list-menu';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { ListFilterService } from 'src/app/services/list-filter.service';
import { LoginService } from 'src/app/services/login.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private listItm : ListMenu[]
  searchText: string;

  constructor(private list: ListMenuService, private route: Router, private listFilterService: ListFilterService, private logout: LoginService) {

    this.listItm = list.getItemList();
   }

   search(){
    this.listFilterService.searchString(this.searchText);
   }

   routeIsActive(routePath: string) {
    return this.route.url === routePath;
}
  ngOnInit() {
  }

  
  doLogout(){
    this.logout.doLogout();
   
  }
}
