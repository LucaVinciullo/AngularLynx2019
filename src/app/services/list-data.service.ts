import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item'

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

private listData: ListItem [] = [
  { id: 1, title: 'Gold Boost', 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", 
  image:"assets/images/gold.jpg",
  favorite: false,
  price: 50},
  { id: 2, title: 'Platinum Boost', 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", 
  image:"assets/images/platinum.png",
  favorite: false,
  price: 100
  },
  { id: 3, title: 'Diamond Boost', 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", 
  image:"assets/images/diamond.jpg",
  favorite: false,
  price: 150
  },
  { id: 4, title: 'Challenger Boost', 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", 
  image:"assets/images/challenger.jpg",
  favorite: false,
  price: 250
  },
]
  getList(): ListItem[] {
    return this.listData;
  }

  getItem(id : number): ListItem {
    const detail = this.listData.find(item => {
      return item.id === id;
    });
    return detail;
  }
  
    getResidualList( id: number): ListItem[] {
      const list: ListItem[] = this.listData.filter( item => {
        return item.id != id
      });
      return list;
      }

  constructor() { }
}
