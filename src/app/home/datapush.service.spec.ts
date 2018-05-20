import { TestBed, inject } from '@angular/core/testing';

import { DatapushService } from './datapush.service';

describe('DatapushService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatapushService]
    });
  });

  it('should be created', inject([DatapushService], (service: DatapushService) => {
    expect(service).toBeTruthy();
  }));
});
