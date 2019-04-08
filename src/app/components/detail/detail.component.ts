import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { ListDataService } from '../../services/list-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
firstTime: boolean = true;
visibleId : number = 0;
item : ListItem;
id : number;
residualList: ListItem[];

  constructor(private listDataService: ListDataService) {
    this.id = 1 //this.route.snapshot.params['id'];
    this.item = listDataService.getItem(this.id);
    this.residualList = listDataService.getResidualList(this.id);
  }

  ngOnInit() {
  }
  showCarousel(id : number){
    this.visibleId = id;
    this.residualList = this.listDataService.getResidualList(this.id);
  }
}
