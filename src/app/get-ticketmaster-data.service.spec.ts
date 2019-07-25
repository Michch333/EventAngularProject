import { TestBed } from '@angular/core/testing';

import { GetTicketmasterDataService } from './get-ticketmaster-data.service';

describe('GetTicketmasterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTicketmasterDataService = TestBed.get(GetTicketmasterDataService);
    expect(service).toBeTruthy();
  });
});
