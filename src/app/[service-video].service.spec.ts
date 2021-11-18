import { TestBed } from '@angular/core/testing';

import { [SERVICEVIDEO]Service } from './[service-video].service';

describe('[SERVICEVIDEO]Service', () => {
  let service: [SERVICEVIDEO]Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject([SERVICEVIDEO]Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
