import { Injectable } from '@angular/core';
import { ListMenu } from '../models/list-menu';

@Injectable({
  providedIn: 'root'
})
export class ListMenuService {
  private list: ListMenu [] = [
    {id: 1, title: 'Homepage', path:'/homepage' },
    {id : 2, title: 'List', path:'/list'},
    {id : 3, title: 'Cards', path:'/homepage'},
    {id : 4, title: 'Feedback', path:'/feedback'},
    {id : 5, title: 'Profilo', path:'/homepage'},
   
  ]
  constructor() { }

  getItemList(): ListMenu[] {
   return this.list;
  }
}
