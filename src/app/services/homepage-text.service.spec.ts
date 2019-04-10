import { TestBed } from '@angular/core/testing';

import { HomepageTextService } from './homepage-text.service';

describe('HomepageTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageTextService = TestBed.get(HomepageTextService);
    expect(service).toBeTruthy();
  });
});
