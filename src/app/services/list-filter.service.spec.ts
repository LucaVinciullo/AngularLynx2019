import { TestBed } from '@angular/core/testing';
import { ListFilterService } from './list-filter.service';

describe('ListFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFilterService = TestBed.get(ListFilterService);
    expect(service).toBeTruthy();
  });
});
