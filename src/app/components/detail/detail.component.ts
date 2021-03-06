import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { ListDataService } from '../../services/list-data.service';
import { Params, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

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


  snapshot: ActivatedRouteSnapshot;

  imageObject: Array<object> = [];
image : Array<object> = [];
  constructor(private listDataService: ListDataService, private route: ActivatedRoute, private _route: Router) {
    this.id = this.route.snapshot.params['id'];
    this.item = listDataService.getItem(Number(this.id));
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
    this.route.params.subscribe(params => {
      console.log(params.username);
      this.id = params.id;
    });
    this.image = this.imageObject;
  }
  
  showCarousel(id: number) {
    this.visibleId = id;
    this.residualList = this.listDataService.getResidualList(this.id);
  }

  
}
