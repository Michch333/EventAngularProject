import { TestBed } from '@angular/core/testing';

import { BuildEventService } from './build-event.service';

describe('BuildEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildEventService = TestBed.get(BuildEventService);
    expect(service).toBeTruthy();
  });
});
