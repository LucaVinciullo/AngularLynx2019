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
  visibleId: number = 0;
  item: ListItem;
  id: number;
  residualList: ListItem[];

  imageObject: Array<object> = [];
  constructor(private listDataService: ListDataService) {
    this.id = 1 //this.route.snapshot.params['id'];
    this.item = listDataService.getItem(this.id);
    this.residualList = listDataService.getResidualList(this.id);

    this.imageObject = [{
      image: this.residualList[0].image,
      thumbImage: this.residualList[0].image,
      title: this.residualList[0].title
    }, {
      image: this.residualList[1].image,
      thumbImage: this.residualList[1].image,
      title: this.residualList[1].title
    }, {
      image: this.residualList[2].image,
      thumbImage: this.residualList[2].image,
      title: this.residualList[2].title
    }
    ];
  }

  ngOnInit() {
  }
  showCarousel(id: number) {
    this.visibleId = id;
    this.residualList = this.listDataService.getResidualList(this.id);
  }
}
