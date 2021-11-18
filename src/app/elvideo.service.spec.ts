import { TestBed } from '@angular/core/testing';

import { ElvideoService } from './elvideo.service';

describe('ElvideoService', () => {
  let service: ElvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
