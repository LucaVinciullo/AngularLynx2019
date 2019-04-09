import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ListMenu } from 'src/app/models/list-menu';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private listItm : ListMenu[]


  constructor(private list: ListMenuService, private route: Router, private logout: LoginService) {
    this.listItm = list.getItemList();
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
