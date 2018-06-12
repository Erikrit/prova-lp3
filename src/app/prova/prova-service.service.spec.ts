import { TestBed, inject } from '@angular/core/testing';

import { ProvaServiceService } from './prova-service.service';

describe('ProvaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvaServiceService]
    });
  });

  it('should be created', inject([ProvaServiceService], (service: ProvaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
