import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../services/list-data.service';
import { ListItem } from 'src/app/models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  private list : ListItem[];

  constructor(private listData: ListDataService) {
    this.list = listData.getList();
   }

  ngOnInit() {
  }

}
