import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../services/list-data.service';
import { ListItem } from 'src/app/models/list-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  private list : ListItem[];

  constructor(private listData: ListDataService, private router: Router) {
    this.list = listData.getList();
   }

   goToDetail(){
    this.router.navigate[('/detail')];
   }

  ngOnInit() {
  }

}
