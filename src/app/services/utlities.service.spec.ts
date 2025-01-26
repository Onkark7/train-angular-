import { TestBed } from '@angular/core/testing';

import { UtlitiesService } from './utlities.service';

describe('UtlitiesService', () => {
  let service: UtlitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
