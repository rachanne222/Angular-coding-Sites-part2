import { TestBed } from '@angular/core/testing';

import { CodeSiteService } from './code-site.service';

describe('CodeSiteService', () => {
  let service: CodeSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
