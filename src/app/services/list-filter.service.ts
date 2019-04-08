import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFilterService {
  
  private searchFilter = new Subject<string>();
  searchFilter$ = this.searchFilter.asObservable();
  
  searchString(query: string) {
    this.searchFilter.next(query);
  }
 
  searchConfirmation(query: string) {
    this.searchFilter.next(query);
  }

  constructor() { }
}
